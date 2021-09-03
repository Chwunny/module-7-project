Do some internet research and find two new tools to explore– one for Continuous Integration, and one for Real Time Error Monitoring. You cannot use the ones you used earlier this week.

Start a new document (Google Docs or similar) and record the unique value-add, or notable features for each tool. Imagine you were an engineer trying to convince your manager to use each tool. What would you say to convince them?

GitLab CI - CI
    - Docker support
    - Easy configuration of the build server
    - Runs parallel builds across multiple machines
    - Available APIs for numerous features allow deep product integration
    - An option to secure project data with Confidential Issues
    
    - Reasons to use:
        - Seamless integration with GitLab
        - Automated testing
        - One patform for building, testing, and deploying
        - Extensive documentation

Raygun - RTEM
    - See the exact line of code that caused an error
    - Monitor deployments to determine what caused a spike or decrease in error count
    - Full stack trace information and diagnostic details for every error occurrence or crash
    - Filter through your errors by date, time, version, tag, host, OS, browser, custom tags, and more
    - Reduce noise with configurable filters for machine name, version, IP address, hostname, and more
    - Groups errors by affected users (this also helps reduce noise)
    - 180-day data retention
    - Support for all major languages and frameworks
    - Easy setup using lightweight SDKs
    - Works seamlessly alongside Real User Monitoring and APM for full visibility into your users digital experience.

    - Reasons to use:
        - Good pricing
        - Good integration
        - Streamlined setup process
        - Excellent documentation

For each tool, find the Getting Started instructions for how to begin using the tool. Evaluate the quality of these instructions. Is there an easy way to get started with the tool? Is the process well-documented? Are there any special tutorials or sandboxes available to make trying it out or learning the tool easier? Include a summary of how to get started with the tool, helpful links, and any other notable resources for this process.

GitLab CI:
Extensive documentation with step by step instructions for every minute detail

Summary:
    - Structure your CI/CD process through pipelines.
    - Reuse values based on a variable/value key pair.
    - Deploy your application to different environments (e.g., staging, production).
    - Output, use, and reuse job artifacts.
    - Cache your dependencies for a faster execution.
    - Configure your own runners to execute your scripts.
    - Configure your pipelines to run quickly and efficiently.
    - Create testing scenarios.

Raygun:
Theres step by step documentation for just about every use case with code examples, best practices, and links to more in depth pages on each feature.

Summary for React with Raygun:
    - Import the Raygun4JS library into the head of your document with a script tag
    - Configure Raygun for crash reporting and user monitoring with another script tag
    - Configure Raygun to track route changes
    - Use React Router alongside BrowserRouter to automatically track route changes
    - You can optionally set up user tracking as well as custom timings

How long has this tool been around? How popular is it? Summarize the maturity and market share of each tool. To answer these questions, check out any public official Github repos for the tool (are they in active development? what is the date of the earliest commit?), the tool’s public website for any notable mentions of current companies that use the tool, and any other information that will help you determine if each tool is compelling to other companies and how new it is.

GitLab CI: 
According to JVM Ecosystem reports, Jenkins with GitHub seems to be the most popular CI/CD tool by far with 58%, compared to GitLabs 6%

Major companies such as Goldman Sachs, Axway, ticketmaster, and Fanatics use GitLab CI

Raygun:
Intital commit for Raygun4JS: Feb 18, 2013, last updated on Sep 1, 2021

Ton of small name comapnies are using raygun, one that stood out to me was the Cloud9 gaming organization. Could not find any documentation on what the market share for raygun was