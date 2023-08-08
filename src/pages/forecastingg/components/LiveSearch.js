import React, { useState, useRef, useEffect } from "react";

function LiveSearch(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(props.selectedOption);
  const [selectedOptionId, setSelectedOptionId] = useState(
    props.selectedOptionId
  );

  const categories = [
    "Category-Add Ons",
    "Category-All Day Brunch",
    "Category-Appetiser",
    "Category-Artisanal Pizza",
    "Category-Burgers & Sandwiches",
    "Category-Coffee",
    "Category-Cold Pressed Juices",
    "Category-Combos",
    "Category-Desserts",
    "Category-Freshly Baked Bread",
    "Category-Kulturd Kombucha",
    "Category-Main Course",
    "Category-Make Your Own Pizza",
    "Category-Pasta",
    "Category-Salads",
    "Category-Sides",
    "Category-Soup",
    "Category-Summer Coolers",
    "Category-TEA",
    "Category-TURKISH FOOD POPUP",
  ];

  const Item_list = [
    "Item Name-Add Chia Seeds",
    "Item Name-Add Chicken",
    "Item Name-Add Egg Envelope",
    "Item Name-Add Fresh Mazzarella Di Buffala",
    "Item Name-Add Fried Egg",
    "Item Name-Add Gluten Free Base",
    "Item Name-Add Gluten Free Penne",
    "Item Name-Add Melted Cheddar",
    "Item Name-Add Mozzarella",
    "Item Name-Add Parmesan Cheese",
    "Item Name-Add Pepperoni",
    "Item Name-Add Poached Egg",
    "Item Name-Add Prawns",
    "Item Name-Add Tuna",
    "Item Name-Add Vegan Cheese",
    "Item Name-Affogato Coffee",
    "Item Name-Aglio Olio E Pepperoncino Pasta",
    "Item Name-Ahimsa Chocolate Brownie",
    "Item Name-Apple Cinnamon",
    "Item Name-Apple Cinnamon Kombucha",
    "Item Name-Artisanal Pizaa Make Your Own",
    "Item Name-Beirut Mezze Platter",
    "Item Name-Beirut Sandwich",
    "Item Name-Boiled Eggs [2 Pieces]",
    "Item Name-Broccoli Spinach Soup",
    "Item Name-Brown Butter And Sage Ravioli",
    "Item Name-Bruschetta",
    "Item Name-Burrata Salad",
    "Item Name-Caesars Classic Salad",
    "Item Name-Cafe Americano",
    "Item Name-Cafe Latte",
    "Item Name-Cappuccino Coffee",
    "Item Name-Capriciosa Pizza",
    "Item Name-Captain Caprese Salad",
    "Item Name-Caramelised Onion Chevre Pizza",
    "Item Name-Carpaccio Chevre Sushi",
    "Item Name-Carpaccio Vegeterian",
    "Item Name-Catering Services Provided In Exhibition",
    "Item Name-Chapati",
    "Item Name-Cheese Pideh",
    "Item Name-Chia Seeds",
    "Item Name-Chicken",
    "Item Name-Chicken Crepe Roll",
    "Item Name-Chicken Momos (6 Pcs) [6 Pieces]",
    "Item Name-Chicken Momos [6 Pieces]",
    "Item Name-Chocolate Caramel Tart",
    "Item Name-Ciabatta Loaf",
    "Item Name-Classic Falafel Wrap",
    "Item Name-Club Fiesta Salad",
    "Item Name-Coke",
    "Item Name-Cold Brew Infused With Homegrown Mint",
    "Item Name-Cold Brew Infused With Homegrown Mint Coffee",
    "Item Name-Cold Coffee",
    "Item Name-Combo(1)  2veg: Pizza+2 Veg Pasta +1 Garlic Bread",
    "Item Name-Combo(1) 2veg: Pizza+2 Veg Pasta +1 Garlic Bread",
    "Item Name-Cous Cous Cous",
    "Item Name-Crackers With Hummus",
    "Item Name-Crispy Shrimp Tempura",
    "Item Name-Crispy Tempura Prawn Sushi",
    "Item Name-Cucumber Wakame Salad",
    "Item Name-Dal",
    "Item Name-Dexterita Juice",
    "Item Name-Dolma  Vegetarian",
    "Item Name-Dolma (veg)",
    "Item Name-Dolma Non Veg",
    "Item Name-Dolma(lamb)",
    "Item Name-Double Espresso",
    "Item Name-Egg Envelope",
    "Item Name-Egg Spinach Pideh",
    "Item Name-Eggs Benedict",
    "Item Name-Energia Juice",
    "Item Name-Falafel Qo",
    "Item Name-Festive Diwali Hamper",
    "Item Name-Fix Dinner",
    "Item Name-French Fries With Herbs & Aioli",
    "Item Name-French Press Organic Coffee",
    "Item Name-Fresh Green Pea Soup",
    "Item Name-Fresh Home Made Assorted Bread",
    "Item Name-Fresh Mozzrarella Di Bufala",
    "Item Name-Fresh Mozzrarella Di Bufla",
    "Item Name-Fried Egg",
    "Item Name-Garden Vegetable Sushi",
    "Item Name-Garlic Bread Sourdough",
    "Item Name-Ginger Lemongrass",
    "Item Name-Ginger Lemongrass Kombucha",
    "Item Name-Ginger Mint Lemonade",
    "Item Name-Gluten Free Base",
    "Item Name-Gluten Free Penne",
    "Item Name-Gluten Free Sourdough Bread Loaf",
    "Item Name-Grilled Veggies Hummus Wrap",
    "Item Name-H- Tea Menu",
    "Item Name-Herbal Hot Toddy",
    "Item Name-High Tea Menu",
    "Item Name-Homegrown Basil Pesto Pasta",
    "Item Name-Horitiaki Salad",
    "Item Name-Hot Chocolate",
    "Item Name-Hot Espresso Coffee",
    "Item Name-Iced Espresso Coffee",
    "Item Name-Iced Tea",
    "Item Name-Iced Tea Soda",
    "Item Name-Indian Masala Tea",
    "Item Name-Jaipur Modern Pizza",
    "Item Name-Jamun",
    "Item Name-Jamun Kombucha",
    "Item Name-Keto Roll",
    "Item Name-Kisir Bulgur Salad",
    "Item Name-Koh Samui Thai Green Curry",
    "Item Name-Koh Samui Thai Red Curry",
    "Item Name-La Bianca Verde",
    "Item Name-Lahmacun",
    "Item Name-Lasagne Neapolitan",
    "Item Name-Lemon Coriander Soup",
    "Item Name-Lemongrass Kombucha",
    "Item Name-Lima Sandwich",
    "Item Name-Loose Tea",
    "Item Name-Macchiato Coffee",
    "Item Name-Mafioso Prawns",
    "Item Name-Make Your Own Pizza",
    "Item Name-Manchester Sandwich",
    "Item Name-Margherita Pizza",
    "Item Name-Marigold Juice",
    "Item Name-Mashed Potato",
    "Item Name-Melted Cheddar",
    "Item Name-Miditerraneo Pizza",
    "Item Name-Mineral Water",
    "Item Name-Minestrone Soup",
    "Item Name-Miso Soba Ramen",
    "Item Name-Mix Subzi",
    "Item Name-Modern'S Marvel Salad",
    "Item Name-Modern's Marvel Salad",
    "Item Name-Mojito",
    "Item Name-Mouiln Rouge Juice",
    "Item Name-Mozzarella",
    "Item Name-Multiseed Sourdough",
    "Item Name-Mücver Fritters",
    "Item Name-Nachos",
    "Item Name-New Orleans Sandwich",
    "Item Name-New Year Dinner (adult)",
    "Item Name-New Year Dinner (children)",
    "Item Name-Oat Milk Cappuccino( Dairy Free)",
    "Item Name-Okinawan Ramen",
    "Item Name-P Rice",
    "Item Name-Panna Cotta",
    "Item Name-Parmesan & Olive Sourdough",
    "Item Name-Parmesan Cheese",
    "Item Name-Pasta Arrabiata",
    "Item Name-Pasta Pomodoro",
    "Item Name-Penne Arrabiata",
    "Item Name-Pepperoni",
    "Item Name-Pepperoni Pizza",
    "Item Name-Perrier",
    "Item Name-Perrier 330 Ml",
    "Item Name-Perrier [750 Ml]",
    "Item Name-Pesto Sauce 250g",
    "Item Name-Pesto Sauce [250 Gms]",
    "Item Name-Philly Cheese Cake",
    "Item Name-Phuket Satay",
    "Item Name-Pineapple Clove & Star Anise",
    "Item Name-Plain Sourdough Bread Loaf",
    "Item Name-Poached Egg",
    "Item Name-Potato Rosti",
    "Item Name-Prawn Tempura Sushi",
    "Item Name-Prawns",
    "Item Name-Printing Charges",
    "Item Name-Quattro Formaggi Pasta",
    "Item Name-Quattro Formaggi Pizza",
    "Item Name-Queens Quinoa Salad",
    "Item Name-Quinoa & Rice Flour Pancakes + Bananas",
    "Item Name-Quinoa & Rice Flour Pancakes With Bananas",
    "Item Name-Quinoa Carpaccio Chevre Sushi",
    "Item Name-Quinoa Carrot Cake",
    "Item Name-Quinoa Coconut Chocolate Cake",
    "Item Name-Quinoa Coconut Jagge",
    "Item Name-Quinoa Coconut Jaggery Ladoos",
    "Item Name-Quinoa Mushroom Burger",
    "Item Name-Quinoa Mushroom Risotto",
    "Item Name-Quinoa Nasi Goreng",
    "Item Name-Quinoa Pad Thai Veg",
    "Item Name-Quinoa Steak",
    "Item Name-Quinoa Veg Sushi With Sriracha Mayo",
    "Item Name-Ravioli  1kgs",
    "Item Name-Ravioli Ricotta And Spinach In Pomodoro",
    "Item Name-Roast Chicken Pizza",
    "Item Name-Rosa Pasta",
    "Item Name-Rose",
    "Item Name-Rose Kombucha",
    "Item Name-Rossa Juice",
    "Item Name-Rotisserie Grilled Chicken",
    "Item Name-Rubino Juice",
    "Item Name-Salmon Tartare",
    "Item Name-Salt And Pepper Prawns",
    "Item Name-Salt Lime Soda",
    "Item Name-San Pellegrino Gassata [600 Ml][",
    "Item Name-Sauteed Mushroom",
    "Item Name-Sauteed Quinoa",
    "Item Name-Scrambled Eggs",
    "Item Name-Shakshuka",
    "Item Name-Shiitake Veggie Sushi",
    "Item Name-Sicily Sandwich",
    "Item Name-Sliced Cheese",
    "Item Name-Smeraldo Juice",
    "Item Name-Soba Noodles Salad",
    "Item Name-Soup Du Jour",
    "Item Name-Sourdough Bread Loaf",
    "Item Name-Sourdough Cheese And Olive Bread",
    "Item Name-Space Cake",
    "Item Name-Space Rental",
    "Item Name-Spinach",
    "Item Name-Srilankan Coconut Curry",
    "Item Name-Steam Rice",
    "Item Name-Steamed Seasonal Vegetables",
    "Item Name-Sweet Lime Soda",
    "Item Name-Sweet Potato 1kgs",
    "Item Name-Sweet Potato Home Fries",
    "Item Name-Tandoori Shawarma",
    "Item Name-Tea Bags",
    "Item Name-Tiramisu",
    "Item Name-Tomatino Juice",
    "Item Name-Tortilla Bowl",
    "Item Name-Traditional Italian Bruschetta",
    "Item Name-Truffle Fungi Pizza",
    "Item Name-Tuna",
    "Item Name-Tuna Anchovy Pizza [12 Inches]",
    "Item Name-Turkish Mezze & Crackers",
    "Item Name-Vanilla Ice Cream",
    "Item Name-Veg Momos (6 Pcs)",
    "Item Name-Veg Momos [6 Pieces]",
    "Item Name-Veg Tacos",
    "Item Name-Vegan  Margherita Pizza",
    "Item Name-Vegan Cheese",
    "Item Name-Vegan Khichadi",
    "Item Name-Vegan Margherita Pizza",
    "Item Name-Vegan Sriracha Mayo [40Gm]",
    "Item Name-Vegan Sriracha Mayo [40gm]",
    "Item Name-Vegetable Topping",
    "Item Name-Verdure Miste Pizza",
    "Item Name-Vietnamese Spring Rolls",
    "Item Name-Vitalita Juice",
    "Item Name-Wasabi Tempura Sushi",
    "Item Name-Winter Beetroot Salad",
  ];

  // Create options based on selectedOption prop
  let options = [];
   if (props.selectedOptionId === 102 || props.selectedOptionId <= 20) {
    options = [
      // { id: 4, plot: "Dine In", value: "Dine in" },
      // { id: 5, plot: "Dine Out", value: "Dine out" },
      // { id: 6, plot: "All", value: "all" },
      ...categories.map((category, index) => ({
        id: index + 1,
        plot: category,
        value: category,
      })),
    ];
  } else {
    options = [
      // { id: 7, plot: "2", value: "2" },
      // { id: 8, plot: "3", value: "3" },
      ...Item_list.map((category, index) => ({
        id: index + 1,
        plot: category,
        value: category,
      })),
    ];
  }

  const selectMenuRef = useRef(null);

  const handleOptionClick = (item) => {
    setSelectedOption(item.plot);
    setSelectedOptionId(item.id);
    props.handleOptionClick(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectMenuRef.current &&
        !selectMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectMenuRef]);

  return (
    <div>
      <div className="select-container multi">
        <div
          className={`select-menu ${isOpen ? "active" : ""}`}
          ref={selectMenuRef}
        >
          <button className="select-btn" onClick={() => setIsOpen(!isOpen)}>
            <span className="sBtn-text">{selectedOption}</span>
            <i className="bx bx-chevron-down"></i>
          </button>
          <ul className="options">
            {options.map((item) => (
              <li
                className="option"
                key={item.id}
                onClick={() => {
                  handleOptionClick(item);
                }}
              >
                <span className="option-color"></span>
                <span className="option-text">{item.plot}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LiveSearch;
