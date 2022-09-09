- [Memory Leakage in React Applications](#memory-leakage-in-react-applications)
- [What is the `useEffect` Hook?](#what-is-the-useeffect-hook)
- [Simplest Use](#simplest-use)
- [Cleaning Up](#cleaning-up)

Beginners may be concerned about having `useEffect` in the code in my previous tutorial post about useState and useEffect. You can check out my step-by-step [React Tutorial Beginner - useState and useEffect with Example Code](https://amirahnasihah.hashnode.dev/react-tutorial-beginner-usestate-and-useeffect-with-example-code). I will explain below why we need a `useEffect` in our code in this post.

# Memory Leakage in React Applications

Create a `useEffect` hook to _Clock.js_ that clears the `setInterval` every time the Clock component is updated. Other than that, you'd have a lot of "intervals" that may result in memory leaks.

> If you're not sure what memory leaking is, do a Google search for “memory leakage”.

# What is the `useEffect` Hook?

When a component is updated or re-rendered, the `useEffect` hook is invoked or called. You can use it to perform tasks before the component is loaded, updated, or refreshed.

# Simplest Use

The `useEffect` hook is used in the simplest possible way in the example below. It basically implies that the page title will be modified to `"You clicked X times"` every time the component is refreshed.

```JSX
  useEffect(() => {
    // Update the document title using the browser API
    document.title = "You clicked ${count} times";
  });
```

Only refresh when a certain variable changes.

In this example below, you can see that we have added `[time]` as the second parameter to the `useEffect` hook. That is, this `useEffect` hook would only run when the component is updated or refreshed due to an update in the time variable. This also applies to the first load.

```JSX
  useEffect(() => {
    setInterval(showDate, 1000);
  }, [time]);
```

# Cleaning Up

Sometimes the action you perform in the `useEffect` hook will run for a long time or even forever (e.g., refreshing the clock every second with `setInterval`). In this situation,  make sure that when React refreshes the component, it cleans up the “long-running tasks”. Otherwise, you'd be running a slew of "long-running tasks" in the background, using up your whole computer's RAM.

To do this, you must return a "clean up function" from the `useEffect` hook. React will use that function to clean up the long-running task when the component is refreshed. If you put a long-running task in the `useEffect` hook, you should **always** include a clean up function.

```JSX
  useEffect(() => {
    const interval = setInterval(showDate, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);
```

In the above example, you can see that we returned an arrow function called `clearInterval` to handle the cleanup for us.

Don't be too worried about this if you're not quite sure. It is rarely used in actual code.

---

Please share it with the community at [daily.dev](https://app.daily.dev/) by adding the article's URL / link to the feed.
