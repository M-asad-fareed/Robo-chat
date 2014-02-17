/**
 * Created by Kashif Ahmed on 1/19/14.
 */

var dataStore = {
    "UserName": "Saad Ahmed Siddiqui",
    "ComputerName": "Computer",
    "lexemes": [
        "who",      //1
        "are",      //2
        "you",      //3
        "am",       //4
        "I",        //5
        "today",    //6
        "?",        //7
        "time"     //8
    ],
    "predicates": [
        {
            when: [1, 2, 3],
            act: 1
        },
        {
            when: [1, 4, 5, 7],
            act: 2
        },
        {
            when: [8, 7],
            act: 3
        },
        {
            when: [6, 7],
            act: 4
        },
        {
            when: [],
            act: 5
        }
    ]}
    dataStore["actuators"] = [
        "I am " + dataStore.ComputerName,     //1
        "You are " + dataStore.UserName,      //2
        "its " + getTime(),              //3
        "today is " + getToday(),         //4
        "I don't understand"//5
    ];
    dataStore["MinReplyTime"] = 0;
    dataStore["MaxReplyTime"] = 14;



