Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  Scenario: Sunday isn't Friday
    Given today is Sunday
    When I ask whether it's Friday yet
    Then I should be told "Nope"

  Scenario Outline: Fridays_route
    Given that we have 10 pickups for this Friday 
    When We get the <ejeX> 
    And the <ejeY> pickup points for delivery
    Then We will give the pickup point and get the route
  Examples:
    | ejeX | ejeY |
    | 9  | 7  |
    | 10  | 10  |
    | 3  | 0  |
    | 0  | 3  |
    | 5  | 5  |
    | 11  | 13  |
    | 13  | 15  |
    | 7  | 11  |
    | 3  | 5  |
    | 1  | 2  |