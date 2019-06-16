Bamazon CLI Shopping Hub

The purpose of this app is to allow a user to "purchase" goods from a fictional website called bamazon. The webstore has its stock stored in a mysql database that is updated over time through user input.
In order to run this program the user will need to navigate to the app location on their computer and npm install the dependencies. To start the app itself, type "node bamazonCustomer.js" into git bash.
When first booted up, the app displays all the products currently available for purchase.
![Initial](https://github.com/SMLM42/bamazon/blob/master/images/storefront.png)
Scrolling back down to the bottom of the list and the command line itself, the user has the option to type the id number of the product they wish to purchase.
![First Prompt](https://github.com/SMLM42/bamazon/blob/master/images/prompt1.png)
Once they confirm, the app will ask how many of the selected product the user wishes to purchase.
![Second Prompt](https://github.com/SMLM42/bamazon/blob/master/images/prompt2.png)
If there is enough stock to fulfill the order then the order will be placed and the user will be presented with the total price, then asked if they wish to continue shopping.
![Third Prompt](https://github.com/SMLM42/bamazon/blob/master/images/prompt3.png)
If there was not enough stock to complete the order the user will be told such and then asked if they wish to continue shopping.
![Insufficient Stock](https://github.com/SMLM42/bamazon/blob/master/images/insufficient_stock.png)
Finally, if says they are done shopping, the app thanks them for shopping on bamazon and closes out.
![Exit](https://github.com/SMLM42/bamazon/blob/master/images/exit.png)