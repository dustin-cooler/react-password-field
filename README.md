# React password library

## Running it

Install everything using `npm install` or `yarn install`.

To view and interact with the main components, run storybook via
`npm run storybook` or `yarn run storybook`.

To run the tests, use `npm run test` or `yarn test`.

Developed and tested with Node 14 & npm 6 on OSX.

## Components

This library consists of two main components which have associated stories
available in storybook.

`PasswordGroup` contains two `PasswordField` components along with all of the
logic, validation, buttons, and success/fail messaging. There is an `onSubmit` 
prop that accepts a function, which will be called on valid form submission and 
passed the value of the new password.

`PasswordField` is a reusable component that combines a label, password input,
and associated validation messaging.

## Credits

Because it's been a while since I created a component library, I used the
following article as a rough guide for setting up rollup, typescript, jest, and
storybook: https://blog.logrocket.com/build-component-library-react-typescript/

I borrowed some of the button css from the above article to save time. Because I
didn't want to make assumptions about font choice and availability, I used 
Medium's system font stack as described in 
https://css-tricks.com/snippets/css/system-font-stack/. The rest of the code is 
mine.