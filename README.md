
# Playwright Automation

## What is PLaywright?

Playwright is an open-source automation library for browser testing and web scraping

Developed By Microsoft and launched on 31st Jan 2020

It runs test on 3 types of browsers, Chromium( Edge, Chrome, Brave etc), Firefox (all versions of firefox), Webkit (Safari).




## Installation

Since Playwright is a node library it can be installed like any other library

First make a folder and open in it in any IDE(e.g vs code)

    npm init playwright@latest
    
Type the above command in terminal on the folder by typing ctrl + j

## Tests

Playwright works on test blocks

Usually stored in tests folder

Tests can be written either in Javascript or Typescript

It can be chosen at the time on installation

An example test will already be provided in the test folder

## How to run tests

Any test in the test folder can be executed individually or all the tests in the folder

    npx playwright test

The above command executes all the tests in the test folder

    npx playwright test example.spec.ts

The above command runs any specific test file

A single test file may contain multiple tests

## Structure

Since playwright is node library its code will be similar to js or ts

Firstly we import test modules from playwright

    import { test } from '@playwright/test';

Next we create a test block

A test block is similar to a function which takes 2 arguments

First a string which is used to name that test block

Second a function

The second parameter will contain the test code

    test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
    });

This is an test block from the example.spec.ts file 

Here the name of test if has title

As the second parameter the function takes page fixture as a argument

This test will go to playwright.dev website and checks its title

We write async keyword to make this function asynchronous 

The await keyword will make the code wait till we resume it



## Making Tests

There are 2 ways to write a test code

1. Manually writing test
2. Using codegen

1. Manually writing:-

We can always manually write test block code

While by this method we have complete control over the code, it 
can be very time consuming to write test code

2. codegen

Codegen is playwrite’s software with gui which can write test code for us

To use codegen we type into terminal:-

    npx playwright codegen

This will open a browser and a playwright inspector ui


## Headed and Headless mode

By default playwright uses headless mode meaning the browser will not be visible to us

To view the browser during execution we use headed mode

To use headed mode during execution we add to the command        --headed

    npx playwright test example.spec.ts –headed

## Debug Mode

In debug mode we can use playwright inspector to control execution of test
    
    npx playwright test example.spec.ts –debug

## Execution Browser

Playwright supports Chromium, FIrefox and Webkit browsers

We can specify in which browser the test should execute by specifying it in the execution command

    npx playwright test example.spec.ts –project chromium
.

    npx playwright test example.spec.ts –project firefox
.

    npx playwright test example.spec.ts –project webkit

## Workers

Worker are like threads

We can control the number of workers executing the test

    npx playwright test example.spec.ts –workers 2

## Assertions

Assertions is like if else statement

It checks the derived value from the expected value

To use assertions we use expect method

Firstly we need to import expect module from the playwright library

## Annotations

There are 4 annotations
- .skip()
- .fixme()
- .only()
- .slow()

1. .skip()

The test with this annotation is skiped during execution

2. .fixme()

Aborts the test with this annotation and marks it as to be solved

3. only()

Only executes the test with this annotation

4. .slow()

Triples timeout value
## Group

You can group tests to give them a logical name or to scope before/after hooks to the group.

Keyword describe is used to group tests

    import { test, expect } from '@playwright/test';
    
    test.describe('two tests', () => {
    test('one', async ({ page }) => {// ...});
    test('two', async ({ page }) => {// ...});
    });


## Trace

Trace is a playwright gui which captures the tests in video format and can be used to debug test

We can configure trace to run as on, off, retain-on-failure, on-first-entry, on-all-retries.

## API testing

We can use playwright to test api requests like get, put, post and delete

For this we need to use request fixture as argument to the function

## Page Object Model

Playwright also supports page object model
