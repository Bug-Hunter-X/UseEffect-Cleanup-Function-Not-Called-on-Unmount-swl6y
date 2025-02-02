# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common issue in React applications where the cleanup function within a `useEffect` hook is not being called when the component unmounts.  The problem is that the cleanup function is defined correctly, but some condition prevents it from executing.

## Problem

The `MyComponent` component uses `useEffect` to log a message to the console when it mounts and unmounts.  However, in some situations (e.g., rapidly switching between components or unexpected errors), the 'Component unmounted' message may not appear in the console, indicating that the cleanup function is not being executed.

## Solution

The solution often involves carefully examining how the component is being rendered and unmounted.  Make sure that React has a chance to execute the cleanup function before the component is fully removed from the DOM.  This may involve checking for potential race conditions or other unexpected behaviors that could interrupt the cleanup process.  Testing the component thoroughly and checking the browser console helps identify these cases.
