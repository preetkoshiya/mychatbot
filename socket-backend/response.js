// const resObject = {
//     hey: "Hey there! How are you?",
//     "i am fine": "Glad to hear that! What can I do for you?",
//     "i'm fine": "Glad to hear that! What can I do for you?",
//     "fine": "Glad to hear that! How can I help you sir?",
//     hello: "Hey there!! How can I help you?",
//     time: new Date().toLocaleTimeString(),
//     date: new Date().toDateString()
// }
let ctr = 0;
function response(input) {
    
    if (ctr > 3){
        ctr = 0;
        return `I'm sorry I'm unable to help you at the moment. Should we try again?
            Just say 'Hi' or 'Hello'`;
    }
    if (input == 'how are you?'){return "I'm great!! Thanks for asking that."}
    if (input == "order food" || input == 'show menu'){input = 1}
    if (input == "hallo" || input == "hello"){
        return `Hello! What can I do for you?
        Just ask me 'what can you do?'`;
    }
    if (input == 'hii' || input == 'hi'){return "Hii, How are you doing today?";}
    if (input == 'hey' || input == 'hey'){return "Hey, How are you doing today?";}
    if (input == 'fine' || input == "i'm fine" || input == "i'm great" || input == 'great'){
        return `Glad to hear that. What can I do for you?
        Just ask me 'what can you do?'`
    }
    if (input == 'what can you do?' || input == 'z' || input == 'what else can you do?'){
        return `Here's the list of things that I can do:
        1. Show Menu
        2. Take an Order
        3. Suggest some special dishes
        4. Reserve a table
        Please Enter any number to respond.`;
    }
    if (input == 1){
        return `Here's Our menu for today:
        Starters:
            Spring Rolls
            French Onion Soup
            Tomato Bruschetta\n
        Side Dishes:
            Mixed Green Salad
            Garden Vegetables
            French Fries\n
        Main Course:
            Grilled Salmon with Dill Sauce
            Roast Beef with Vegetables
            Chicken and Mushroom Pie
            Eggplant Lasagne\n
        Dessert:
            Apple Pie with Cream
            Lemon Meringue Pie
            Vanilla Ice Cream
            Fruit Salad\n
        Enter any of the above main option to order.
        Or enter 'z' to go to the main menu.`;
    }
    if (input == 2){
        return `What would you like to have today sir?
        Starters
        Side Dishes
        Main Course
        Desserts\n
        You can select any of the above options.
        Or enter 'z' to go to the main menu.`;
    }
    if (input == 'starters' || input == 'side dishes' || input == 'main course' || input == 'desserts'){
        return `Thank you for your order :) Your food is on the way. Please sit back and relax.
        Is there anything else that I can help you with?`;
    }
    if (input == 3){
        return `Here is something special for you:
        M. Marrakesh Vegitarian Curry
        R. Roast Beef with Vegetables\n
        Enter a letter to Order.
        Or enter 'z' to go to the main menu`;
    }
    if (input == 4){
        return `We have some options available for you here:
        A. Tarrace View Table
        B. River Side View Table
        C. Personal Air-Conditioned Room
        D. General Table\n
        Enter any of above option to book.
        Or enter 'z' to go to the main menu`;
    }
    if (input == 'm' || input == 'r'){
        return `Thank you for your order :) Your food is on the way. Please sit back and relax.
        Is there anything else that I can help you with?`;
    }
    if (input == 'a' || input == 'b' || input == 'c' || input == 'd'){
        return `Great Choice. Our assistant will show you the way :)
        Would you like to have any other service from me?`;
    }
    if (input == 'no'){
        return `It was my pleasure to talk to you. Thanks for your visit.
        I'm here to help you in case you need anything. Just say 'hii' or 'hello'.`
    }

    else{
        ctr = ctr + 1;
        return "I did not actually understood you. Please enter correct option.";
    }
};

module.exports = response;