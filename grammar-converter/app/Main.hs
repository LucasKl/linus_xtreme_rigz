{-# LANGUAGE OverloadedStrings #-}
module Main where
import System.Environment
import Data.Text(pack, unpack, replace)
import Data.List(intersperse)

main :: IO ()
main = do
    args <- getArgs
    text  <- readFile (args !! 0)
    let textLines = filter (not . isBlank) $ lines text
    let spec = unparseGrammar $ parseGrammar textLines
    putStrLn $ spec
    writeFile "spec.js" spec
    
parseGrammar :: [String] -> Grammar
parseGrammar = Grammar . parseRules

parseRules :: [String] -> [Rule]
parseRules [] = []
parseRules ls = rule : parseRules remaining
    where (rule, remaining) = parseRule ls

parseRule :: [String] -> (Rule, [String])
parseRule ls = (Rule ruleName ruleEntries, remaining)
    where
        (ruleTag : lss) = dropWhile (not . isRuleTag) ls
        ruleName        = filter (not . (==':')) ruleTag
        ruleEntries     = takeWhile (not . isRuleTag) lss
        remaining       = dropWhile (not . isRuleTag) lss

unparseGrammar :: Grammar -> String
unparseGrammar (Grammar rules) = "let spec=`" ++ unparseRules rules ++ newline ++ "`"

unparseRules :: [Rule] -> String
unparseRules rules = concat $ intersperse newline $ map unparseRule rules

unparseRule :: Rule -> String
unparseRule (Rule ruleName ruleEntries) = ruleName ++ " ::= " ++ entries ++ ";"
    where entries = concat $ intersperse " | " $ map unparseRuleEntry ruleEntries
        
unparseRuleEntry :: String -> String
unparseRuleEntry e = "\"" ++ entry ++ "\"" 
    where entry = replaceLeftBracket $ replaceRightBracket e

isBlank :: String -> Bool
isBlank = all (==' ')

isRuleTag :: String -> Bool
isRuleTag s = last s == ':'

replaceLeftBracket :: String -> String
replaceLeftBracket = unpack . replace ">" ">\"" . pack

replaceRightBracket :: String -> String
replaceRightBracket = unpack . replace "<" "\"<" . pack

newline = "\n\r"

data Grammar = Grammar [Rule] deriving Show
data Rule = Rule String [String] deriving Show

