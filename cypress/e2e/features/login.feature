Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given Open OrangeHR Login Page

    @happypath
    Scenario: Login Page Loaded
        Then Login Page should be fully loaded

    @happypath
    Scenario: Success Login
        When A user logins with following the credentials "Admin", "admin123"
        Then Dashboard page should be opened
    
    @exception
    Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username | password     |
            | testName | admin123     |
        Then Invalid credentials message should be shown

    @exception
    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username | password     |
            | Admin    | testPassword |
        Then Invalid credentials message should be shown
    
    @exception
    Scenario: Empty Credentials Login
        When A user logins with empty credentials
        Then Required messages should be shown for both inputs