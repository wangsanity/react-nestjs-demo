# Getting Started with react-nestjs-demo

This project is to study some setups of a medium size product.

There are several features in this product such as my notes, my courses, etc.


## my-notes

An example for study.

## pc-web-components

Common pc-web components shared by all pc web packages.
This is a react library which could be puhlished to npm, aws, etc. Storybook included.

## pc-web-container - TODO

Authentication and user related features shared by all pc web packages.

## data-transfer-proxy - TODO

Communication channel between different root features.
For example, if my-notes wants to call my-documents apis needs to go through data-transfer-proxy.

## documents

Useful documents.

## .github

Github actions, workflow, etc. Such as CI/CD checks and deployment, etc.

## .githooks

Run checks before when committing changes. Such as pre-commit, commit-msg, etc.

There could be sub hooks under features. e.g. my-notes/githooks/pre-commit is called by .githooks/pre-commit

## CODEOWNERS
Required code reviewers.
