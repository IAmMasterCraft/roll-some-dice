exports.GetMessage = () => {
    const message = [
        "",
        "Comrade na new year be this o",
        "Where are your manners Comrade?",
        "Wetin this Comrade dey find again sef",
        "Why are you doing this Comrade",
        "I fit deck you Comrade",
        "Comrade behaaavvveeee",
        "You wan collect again? Comrade I no sabi that one ooo",
        "Comrade For Hereee????",
        "I chest for you comrade",
        "Comradewey get doingsss, I can see your doings",
        "I see all your attacks Comradeee",
        "Comradeeeee, I see what you're trying to do there. Stopeeeeetttt",
    ];
    return message[Math.floor(Math.random() * (11 - 1)) + 1];
}