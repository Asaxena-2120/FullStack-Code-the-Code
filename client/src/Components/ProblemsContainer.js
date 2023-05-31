import React,{useState} from "react";
import { Card } from 'semantic-ui-react';
import { useParams } from "react-router-dom";
import { Button, Progress } from 'semantic-ui-react'



function ProblemsContainer(){
    const items = [
        {   id : 1,
            title: "Two Sum",
            description: "Given an array of integers, find two numbers such that they add up to a specific target.",
            difficulty_level: "Easy"
        },
        {   id : 2,
            title: "Reverse Integer",
            description: "Reverse digits of an integer.",
            difficulty_level: "Easy"
        },
        {   id : 3,
            title: "Palindrome Number",
            description: "Determine whether an integer is a palindrome.",
            difficulty_level: "Easy"
        },
        {   id : 4,
            title: "Longest Common Prefix",
            description: "Find the longest common prefix string amongst an array of strings.",
            difficulty_level: "Easy"
        },
        {   id : 5,
            title: "Valid Parentheses",
            description: "Given a string containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.",
            difficulty_level: "Easy"
        },
        {   id : 6,
            title: "Merge Two Sorted Lists",
            description: "Merge two sorted linked lists and return it as a sorted list.",
            difficulty_level: "Easy"
        },
        {   id : 7,
            title: "Remove Duplicates from Sorted Array",
            description: "Remove duplicates in-place from a sorted array and return the new length.",
            difficulty_level: "Easy"
        },
        {   id : 8,
            title: "Search in Rotated Sorted Array",
            description: "Searches for a target value in a rotated sorted array.",
            difficulty_level: "Medium"
        },
        {   id : 9,
            title: "Container With Most Water",
            description: "Given n non-negative integers representing the heights of vertical lines, find the maximum area of water that can be contained.",
            difficulty_level: "Medium"
        },
        {   id : 10,
            title: "Merge k Sorted Lists",
            description: "Merge all the linked lists from the k sorted lists and return it as one sorted list.",
            difficulty_level: "Hard"
        }
    ]
    
    function handleCardClick(id){
        console.log("Card is clicked")
    }

    let [state,setState] = useState({ percent: 33 })

  function increment () {
    setState((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
    }))}
      return (
        <>
        <Progress percent={state.percent} indicating />
        <Button onClick={increment}>Increment</Button>
      
        {items.map(function(item) {
          return (
            <Card onClick={handleCardClick} key={item.id}
              header=  {item.title}
              meta = {item.difficulty_level}
              description = {item.description}
            />
          )
        })}


        </>
    
      )

}

export default ProblemsContainer;