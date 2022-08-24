Feature: Google Demo
    @demo
    Scenario Outline: Experiment with WDIO
        Given Google page is opened
        When Search with <SearchTerm>
        Then Click on the first search result
        Then URL should match <ExpectedUrl>

        Examples:
            | TestId | SearchTerm | ExpectedUrl          |
            | Tc_001 | wdio       | https://webdriver.io/ |