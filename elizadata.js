var elizaInitials = [
    "Hey sports fan! What's on your mind today?",
    "Greetings! Ready to talk sports?",
    "Hi there! Let's dive into some sports chat!",
  ];
  
  var elizaFinals = [
    "Touchdown! It was a slam dunk chatting with you!",
    "Game over! Catch you later for more sports talk!",
    "Time's up! Until next time, keep cheering!",
  ];
  
  var elizaQuits = [
    "bye",
    "goodbye",
    "exit",
    "quit",
    "adios",
    "see you later",
  ];
  
  var elizaPres = [
    ["dont", "don't"],
    ["cant", "can't"],
    ["wont", "won't"],
    ["recollect", "remember"],
    ["recall", "remember"],
    ["dreamt", "dreamed"],
    ["dreams", "dream"],
    ["maybe", "perhaps"],
    ["certainly", "yes"],
    ["machine", "computer"],
    ["machines", "computer"],
    ["computers", "computer"],
    ["were", "was"],
    ["you're", "you are"],
    ["i'm", "i am"],
    ["same", "alike"],
    ["identical", "alike"],
    ["equivalent", "alike"],
  ];
  
  var elizaPosts = [
    ["am", "are"],
    ["your", "my"],
    ["me", "you"],
    ["myself", "yourself"],
    ["yourself", "myself"],
    ["i", "you"],
    ["you", "I"],
    ["my", "your"],
    ["i'm", "you are"],
  ];
  
  var elizaKeywords = [
    ['xnone', 0, [
        ['*', [
            "I'm not sure I follow. Can you explain in sports terms?",
            "Hmm, tell me more about that from a sports perspective.",
            "Interesting, go on! How does this relate to sports?",
            "I'm all ears! What else can you tell me, sports-wise?"
        ]],
    ]],
    ['sorry', 0, [
        ['*', [
            "No need to apologize! In sports, we keep moving forward.",
            "Apologies aren't necessary in the game of sports. Let's continue.",
            "Don't worry about it! Now, tell me more from a sports angle."
        ]],
    ]],
    ['hello', 100, [
        ['*', [
            "Hello sports enthusiast! Let's talk sports!",
            "Hey there! Ready to dive into some sports chat?",
            "Hi! Let's kick off with some sports talk!",
        ]],
    ]],
    ['bye', 100, [
        ['*', [
            "Game over! Keep cheering!",
            "See you in the next match! Go team!",
            "Catch you later, alligator! Keep scoring!",
        ]],
    ]],
    ['goal', 50, [
        ['*', [
            "GOAL! That's a winning shot!",
            "What a goal! The crowd goes wild!",
            "GOOOOOAL! That's the spirit!",
        ]],
    ]],
    ['win', 50, [
        ['*', [
            "Winning feels great, doesn't it?",
            "Victory is sweet!",
            "A win is always worth celebrating!",
        ]],
    ]],
    ['lose', 50, [
        ['*', [
            "It's okay, we win some, we lose some!",
            "We'll bounce back stronger next time!",
            "Keep your head up! There's always another game!",
        ]],
    ]],
    ['basketball', 50, [
        ['*', [
            "Let's shoot some hoops!",
            "Nothing but net!",
            "Slam dunk! Basketball is life!",
        ]],
    ]],
    ['football', 50, [
        ['*', [
            "Are you ready for some football?",
            "Touchdown! Let's tackle some topics!",
            "Go long! Football season is here!",
        ]],
    ]],
    ['soccer', 50, [
        ['*', [
            "Are you a fan of the beautiful game?",
            "Kick off! Let's talk soccer!",
            "GOOOOOOOAL! Let's chat about soccer!",
        ]],
    ]],
    ['favorite', 50, [
        ['* professional athlete *', [
            "My favorite professional athlete is Cristiano Ronaldo!",
            "Cristiano Ronaldo is the GOAT!",
            "Ronaldo all the way!",
        ]],
        ['* sport *', [
            "My favorite sport is soccer, hands down!",
            "Soccer is the best sport, no contest!",
            "Football (soccer) is the king of sports!",
        ]],
    ]],
    ['player', 50, [
        ['* favorite *', [
            "Cristiano Ronaldo is my favorite soccer player!",
            "I'm a big fan of Cristiano Ronaldo's skills!",
            "Ronaldo's talent on the field is unmatched!",
        ]],
    ]],
  ];