# languages-app

splash screen
    - small animation and/or logo before user is directed to the home screen. minimal design, transition into actual app

login/sign up screen
    - prompt user to log in and then have option below "not already a user? register now"
    - wont get technical for now. used to pass in name.
    - use SQL to add a database and validation.

home screen
    - welcome {name of user}
    - prompt user to select a language
        - list items
        - store which language user selects
    - have one functional language for now (spanish) add in others for aesthetics and future functionality
    - no bottom nav

profile screen
    - name
    - pfp icon
    - progress bars 
        - flags next to each progress bar
        - gallery mode swipe through them
            - maybe not because on home when they select language it’ll automatically pass lang

activities screen
    - potential activities: quizzes, matching, flashcards, stories
        - card view listing each one OR list items
    - display users level

translate screen
    - users can go in and translate text (from whichever language) -> language they are currently on

chat
    - welcome USER
    - prompt like overlay
        - this is a chat where… directions
    - ai that responds to user (difficult)
    - prompt user to translate what ai types
        - if correct, animation plays
        - if incorrect, error message with correct answer


*questions for self
    - what type of data do we want to maintain for the users who are logged in? name, progress (how far the user got in their language completion before they logged out), 
    - how do we join/combine SQL code and React code?
