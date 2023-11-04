# Counter - Steps Date

The Counter component does the following:

- It uses the React useState hook to manage two state variables: count and step.
- It allows you to increment or decrement both count and step using buttons.
- It calculates a date based on the current date and the count value. The date is displayed in the format "Month Day Year."
- The text displayed depends on the value of count. If count is 0, it shows "Today is." If count is positive, it shows "X days from today is." If count is negative, it shows "X days ago was."
