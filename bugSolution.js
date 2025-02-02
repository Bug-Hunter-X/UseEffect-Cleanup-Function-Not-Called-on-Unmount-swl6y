```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // This effect runs only once after the initial render
    console.log('Component mounted');
    return () => {
      // Cleanup function: This runs when the component unmounts
      if (isMounted) {
        console.log('Component unmounted');
      }
    };
  }, []); // Empty dependency array ensures effect runs only once

  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```