# Tech Interview Challenge
## Installation
### Pre-requisites
Node v14.17.5 or higher
Npm 6.14.14 or higher
### Instructions
1) Clone the repository
2) Install dependencies
```shell
npm install 
```
3) Run tests
```shell
npm test
```

## App design
The task was to build a validator for the following type of object:
```json
{
    "topic": "A",
    "name": "a",
    "description": "something"
}
```
Using the following rules:
```
1. If topic == A, then name will be “a”and description will be more than 10 and less than 100 chars
2. If topic == B, then name will be “x” and description will be less than 40 chars
```

It was explicitly stated that there may be more validators built in the future, so our 
current design must accommodate.

To solve the problem I have employed a strategy pattern. 
That means the current algorithms for A and B topics are isolated into their 
own strategy classes, and as we introduce the new ones, we can do it by introducing more 
strategies without altering the business logic of the abstraction above, which is a Validator class.
With the expection of making the validator aware of the new strategies.

## Testing
I use Jest suite to test the code. I test every rule separately for every strategy, as well as invalid payload passed to 
the validator constructor. All tests could be found in __tests__ directory.

