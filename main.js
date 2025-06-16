const phoneRegex = /^[0-9]{10}$/;
const roomRegex = /^(10[1-9]|1[1-9][0-9]|2[0-9][0-9]|3[0-9][0-9]|4[0-9][0-9]|50[0-2])$/; // Matches 101-502
const fallbackImage = 'https://images.unsplash.com/photo-1504674900247-0877df9cc926';

const menuItems = [
    {
        id: '1',
        name: 'Kingstel Hotel Special Breakfast',
        description: 'A complimentary deluxe breakfast for hotel guests, featuring fresh pastries, eggs, and tropical fruits.',
        price: 0,
        externalPrice: 50.00,
        image: 'images/kinstel breakfast.jpg',
        category: 'breakfast',
        hotelOnly: true,
    },
    {
        id: '2',
        name: 'Premium Continental Breakfast',
        description: 'A luxurious spread of warm pastries, seasonal fruits, and chilled champagne.',
        price: 0,
        externalPrice: 60.00,
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666',
        category: 'breakfast',
        hotelOnly: false,
        isHot: true,
    },
    {
        id: '3',
        name: 'Kingstel Kids Breakfast | Junior Favorite',
        description: 'A fun kids’ meal with mini juice, hot chocolate, toast, sausage, and a fried egg.',
        price: 60.00,
        externalPrice: 65.00,
        image: 'images/Premium Continental Breakfast.jpg',
        category: 'breakfast',
        hotelOnly: false,
        guestOnly1: true,
    },
    {
        id: '4',
        name: 'Kingstel Kids Breakfast | Kishas Favorite',
        description: 'A kid-friendly plate with an egg, veggie potatoes, toast, and sweet jelly.',
        price: 50.00,
        externalPrice: 55.00,
        image: 'images/KishasFavorite.jpg',
        category: 'breakfast',
        guestOnly1: true,
    },
    {
        id: '5',
        name: 'Kingstel Kids Breakfast | Kentricks Favorite',
        description: 'A delightful combo of fresh juice and golden French toast for kids.',
        price: 50.00,
        externalPrice: 55.00,
        image: 'images/KentricksFavorite.jpg',
        category: 'breakfast',
        guestOnly1: true,
    },
    {
        id: '6',
        name: 'Omelette',
        description: 'A classic plain omelette, fluffy and made with fresh eggs.',
        price: 15.00,
        externalPrice: 20.00,
        image: 'images/Omelette.jpg',
        category: 'breakfast',
        hotelOnly: false,
    },
    {
        id: '7',
        name: 'Omelette',
        description: 'A savory omelette filled with melted American cheese.',
        price: 35.00,
        externalPrice: 40.00,
        image: 'https://i.pinimg.com/564x/25/c3/29/25c329fd1e10a6d6204b538ae43b6026.jpg',
        category: 'breakfast',
        hotelOnly: false,
    },
    {
        id: '8',
        name: 'Omelette',
        description: 'A hearty omelette stuffed with earthy mushrooms.',
        price: 25.00,
        externalPrice: 30.00,
        image: 'images/Omelette1.jpg',
        category: 'breakfast',
        hotelOnly: false,
    },
    {
        id: '9',
        name: 'Omelette',
        description: 'Perfectly boiled eggs, simple and wholesome.',
        price: 10.00,
        externalPrice: 15.00,
        image: 'https://i.pinimg.com/564x/58/15/cd/5815cd05f519fba42f78d1724cd98aa1.jpg',
        category: 'breakfast',
        hotelOnly: false,
        guestOnly1: true,
    },
    {
        id: '10',
        name: 'Omelette',
        description: 'Golden French toast dusted with powdered sugar.',
        price: 35.00,
        externalPrice: 40.00,
        image: 'https://i.pinimg.com/564x/ed/22/63/ed2263f58748974026aeba3a9710ea6e.jpg',
        category: 'breakfast',
        hotelOnly: false,
        guestOnly1: true,
    },
    {
        id: '11',
        name: 'Omelette',
        description: 'Fried or scrambled eggs, cooked to your preference.',
        price: 15.00,
        externalPrice: 20.00,
        image: 'https://i.pinimg.com/564x/c2/85/b0/c285b00e0e6d122e144045715fe03981.jpg',
        category: 'breakfast',
        hotelOnly: false,
        guestOnly1: true,
    },
    {
        id: '12',
        name: 'Western Omelette',
        description: 'A flavorful omelette with ham, onions, green peppers, and mushrooms in a light tomato sauce.',
        price: 15.00,
        externalPrice: 20.00,
        image: 'images/Western Omelette.jpg',
        category: 'breakfast',
        hotelOnly: false,
        isHot: true,
    },
    {
        id: '13',
        name: 'Breakfast Beverages',
        description: 'A bold and aromatic shot of espresso.',
        price: 15.00,
        externalPrice: 20.00,
        image: 'images/Breakfast Beverages.jpg',
        category: 'breakfast',
        hotelOnly: false,
    },
    {
        id: '14',
        name: 'Breakfast Beverages',
        description: 'Rich and smooth black coffee, freshly brewed.',
        price: 15.00,
        externalPrice: 20.00,
        image: 'https://i.pinimg.com/564x/b0/1d/97/b01d9791b6b695b84eacb7f73dc2d5c8.jpg',
        category: 'breakfast',
        hotelOnly: false,
    },
    {
        id: '15',
        name: 'Breakfast Beverages',
        description: 'Robust and invigorating strong tea.',
        price: 20.00,
        externalPrice: 25.00,
        image: 'https://i.pinimg.com/564x/cc/ee/e6/cceee6b9376dc6486b46505a45fc9f40.jpg',
        category: 'breakfast',
        hotelOnly: false,
        guestOnly1: true,
    },
    {
        id: '16',
        name: 'Breakfast Beverages',
        description: 'A bold and full-bodied strong coffee.',
        price: 20.00,
        externalPrice: 25.00,
        image: 'https://i.pinimg.com/564x/2a/06/2a/2a062ac35155974b64f6cda6cfb855c2.jpg',
        category: 'breakfast',
        hotelOnly: false,
        guestOnly1: true,
    },
    {
        id: '17',
        name: 'Italian Connection',
        description: 'An omelette bursting with green peppers, sausage, mushrooms, and Swiss cheese.',
        price: 20.00,
        externalPrice: 25.00,
        image: 'https://i.pinimg.com/564x/40/0d/5a/400d5ab9dc3bf1815b99c471708ce8a3.jpg',
        category: 'breakfast',
        hotelOnly: false,
        guestOnly1: true,
    },
    {
        id: '18',
        name: 'Muffins and Croissants',
        description: 'Freshly baked muffins and flaky croissants, served with butter and jam.',
        price: 20.00,
        externalPrice: 25.00,
        image: 'images/Muffins and Croissants.jpg',
        category: 'breakfast',
        hotelOnly: false,
        guestOnly1: true,
    },
    {
        id: '600',
        name: 'Pizza',
        description: 'A classic pizza topped with fresh vegetables and mozzarella.',
        price: 100,
        image: 'https://i.pinimg.com/736x/44/93/84/4493848babc1da57c2f2641891e2d0fc.jpg',
        category: 'lunch'
    },
    {
        id: '601',
        name: 'Chicken Salad',
        description: 'Grilled chicken with crisp lettuce, onions, tomatoes, and baked beans.',
        price: 75,
        image: 'https://i.pinimg.com/564x/15/de/2c/15de2cac5615a54813f8e0a8530c6876.jpg',
        category: 'lunch'
    },
    {
        id: '602',
        name: 'Beef Burger',
        description: 'Juicy beef patty with lettuce, tomatoes, and pickles on a toasted bun.',
        price: 75.00,
        image: 'https://i.pinimg.com/564x/9c/3f/f8/9c3ff80de68d804ab50f939d3d82723d.jpg',
        category: 'lunch'
    },
    {
        id: '603',
        name: 'Cheese Burger',
        description: 'Beef patty with melted cheese, lettuce, and tomatoes.',
        price: 85.00,
        image: 'https://i.pinimg.com/564x/21/62/3b/21623b2faa7f20a7f2287891c776b956.jpg',
        category: 'lunch'
    },
    {
        id: '604',
        name: 'Egg Burger',
        description: 'Beef patty topped with a fried egg, lettuce, and tomatoes.',
        price: 80.00,
        image: 'https://i.pinimg.com/564x/79/61/18/796118c9a11997d1086a8143a31e8a26.jpg',
        category: 'lunch'
    },
    {
        id: '605',
        name: 'Caesar Salad or Greek Salad',
        description: 'Choose between a creamy Caesar or a fresh Greek salad with feta and olives.',
        price: 85.00,
        image: 'images/Caesar Salad or Greek Salad.jpg',
        category: 'lunch'
    },
    {
        id: '606',
        name: 'Sandwiches (Club, Chicken, Tuna)',
        description: 'Your choice of club, grilled chicken, or tuna sandwich with fresh veggies.',
        price: 80.00,
        image: 'images/Sandwiches (Club, Chicken, Tuna).jpg',
        category: 'lunch'
    },
    {
        id: '607',
        name: 'Pasta (Spaghetti Bolognese, Alfredo)',
        description: 'Choose spaghetti Bolognese or creamy Alfredo pasta, made fresh.',
        price: 85.00,
        image: 'images/Pasta (Spaghetti Bolognese, Alfredo).jpg',
        category: 'lunch',
        isHot: true,
    },
    {
        id: '608',
        name: 'Grilled Chicken with Rice',
        description: 'Tender grilled chicken served with fragrant rice and a side of veggies.',
        price: 80.00,
        image: 'images/Grilled Chicken with Rice.jpg',
        category: 'lunch',
        isHot: true,
    },
    {
        id: '609',
        name: 'Fish and Chips',
        description: 'Crispy fried fish with golden fries and tartar sauce.',
        price: 85.00,
        image: 'images/Fish and Chips.jpg',
        category: 'lunch'
    },
    {
        id: '610',
        name: 'Burgers (Beef, Chicken, Veggie)',
        description: 'Choose from beef, chicken, or veggie burgers with fresh toppings.',
        price: 80.00,
        image: 'images/Burgers (Beef, Chicken, Veggie).jpg',
        category: 'lunch'
    },
    {
        id: '611',
        name: 'Soups (Tomato, Chicken, or Vegetable)',
        description: 'Warm up with your choice of tomato, chicken, or vegetable soup.',
        price: 80.00,
        image: 'images/Soups (Tomato, Chicken, or Vegetable).jpg',
        category: 'lunch'
    },
    {
        id: '612',
        name: 'Fish or Meat Garden Egg Stew',
        description: 'Rich garden egg stew with your choice of fish or meat, served with a side.',
        price: 140.00,
        image: 'images/Fish or Meat Garden Egg Stew.jpg',
        category: 'lunch'
    },
    {
        id: '613',
        name: 'Okro Stew',
        description: 'Flavorful okro stew, slow-cooked with spices and served with a side.',
        price: 140.00,
        image: 'images/Okro Stew.jpg',
        category: 'lunch'
    },
    {
        id: '614',
        name: 'Fish or Beef Okro Soup',
        description: 'Hearty okro soup with your choice of fish or beef, perfect with fufu.',
        price: 140.00,
        image: 'images/Fish or Beef Okro Soup.jpg',
        category: 'lunch'
    },
    {
        id: '615',
        name: 'Goat Light Soup',
        description: 'Spicy and aromatic goat light soup, a Ghanaian classic.',
        price: 120.00,
        image: 'images/Goat Light Soup.jpg',
        category: 'lunch'
    },
    {
        id: '616',
        name: 'Chicken Light Soup',
        description: 'Comforting chicken light soup, infused with bold spices.',
        price: 120.00,
        image: 'images/Chicken Light Soup.jpg',
        category: 'lunch'
    },
    {
        id: '617',
        name: 'Pork in Tomato Sauce',
        description: 'Tender pork simmered in a rich tomato sauce, served with a side.',
        price: 110.00,
        image: 'images/Pork in Tomato Sauce.jpg',
        category: 'lunch'
    },
    {
        id: '618',
        name: 'Fresh Fish Light Soup',
        description: 'Light and spicy soup with fresh fish, perfect for a hearty meal.',
        price: 140.00,
        image: 'images/Fresh Fish Light Soup.jpg',
        category: 'lunch'
    },
    {
        id: '619',
        name: 'Fish, Beef Palava Sauce',
        description: 'Creamy palava sauce with fish or beef, served with a starchy side.',
        price: 140.00,
        image: 'images/Fish, Beef Palava Sauce.jpg',
        category: 'lunch'
    },
    {
        id: '620',
        name: 'Fresh Tilapia Soup',
        description: 'Whole tilapia in a spicy, flavorful broth, a true delicacy.',
        price: 200.00,
        image: 'images/Fresh Tilapia Soup.jpg',
        category: 'lunch'
    },
    {
        id: '621',
        name: 'Smoked or Dried Fish Light Soup',
        description: 'Smoky fish light soup with bold, aromatic spices.',
        price: 140.00,
        image: 'images/Smoked or Dried Fish Light Soup.jpg',
        category: 'lunch'
    },
    {
        id: '622',
        name: 'Red Red (Fish or Meat)',
        description: 'Rich black-eyed peas stew with fish or meat, served with plantains.',
        price: 150.00,
        image: 'images/Red Red (Fish or Meat).jpg',
        category: 'lunch'
    },
    {
        id: '623',
        name: 'Egg in Tomato Stew',
        description: 'Scrambled eggs in a spicy tomato stew, great with yam or rice.',
        price: 50.00,
        image: 'images/Egg in Tomato Stew.jpg',
        category: 'lunch'
    },
    {
        id: '624',
        name: 'Banku',
        description: 'Smooth and tangy fermented corn dough, served with soup or stew.',
        price: 15.00,
        image: 'images/Banku.jpg',
        category: 'lunch'
    },
    {
        id: '625',
        name: 'Fufu',
        description: 'Soft and stretchy pounded yam or cassava, perfect with soup.',
        price: 15.00,
        image: 'images/Fufu.jpg',
        category: 'lunch'
    },
    {
        id: '626',
        name: 'Plain Rice',
        description: 'Fluffy white rice, a versatile side for any stew or sauce.',
        price: 15.00,
        image: 'images/Plain Rice.jpg',
        category: 'lunch'
    },
    {
        id: '700',
        name: 'Jollof Rice with Chicken',
        description: 'Flavorful Ghanaian jollof rice served with succulent grilled chicken.',
        price: 100.00,
        image: 'images/Jollof Rice with Chicken.jpg',
        category: 'dinner',
        isHot: true,
    },
    {
        id: '701',
        name: 'Fried Rice with Fish',
        description: 'Aromatic fried rice paired with crispy fried fish.',
        price: 100.00,
        image: 'images/Fried Rice with Fish.jpg',
        category: 'dinner'
    },
    {
        id: '702',
        name: 'Grilled Tilapia with Banku',
        description: 'Whole grilled tilapia served with tangy banku and spicy sauce.',
        price: 150.00,
        image: 'images/Grilled Tilapia with Banku.jpg',
        category: 'dinner',
        isHot: true,
    },
    {
        id: '703',
        name: 'Waakye with Fish',
        description: 'Traditional waakye with fish, shito, and a side of salad.',
        price: 100.00,
        image: 'images/Waakye with Fish.jpg',
        category: 'dinner'
    },
    {
        id: '704',
        name: 'Pounded Yam with Egusi Stew',
        description: 'Smooth pounded yam served with rich egusi stew and meat.',
        price: 120.00,
        image: 'images/Pounded Yam with Egusi Stew.jpg',
        category: 'dinner'
    },
    {
        id: '705',
        name: 'Fufu with Groundnut Soup',
        description: 'Fufu paired with creamy groundnut soup and your choice of meat.',
        price: 120.00,
        image: 'images/Fufu with Groundnut Soup.jpg',
        category: 'dinner'
    },
    {
        id: '706',
        name: 'Banku with Okro Stew',
        description: 'Tangy banku served with flavorful okro stew and fish.',
        price: 100.00,
        image: 'images/Banku with Okro Stew.jpg',
        category: 'dinner'
    },
    {
        id: '707',
        name: 'Tuo Zaafi with Ayoyo Soup',
        description: 'Tuo zaafi with nutritious ayoyo soup and meat.',
        price: 100.00,
        image: 'images/Tuo Zaafi with Ayoyo Soup.jpg',
        category: 'dinner'
    },
    {
        id: '708',
        name: 'Kenkey with Fish',
        description: 'Steamed kenkey served with fried fish and spicy pepper sauce.',
        price: 80.00,
        image: 'images/Kenkey with Fish.jpg',
        category: 'dinner'
    },
    {
        id: '709',
        name: 'Grilled Pork with Fried Plantain',
        description: 'Juicy grilled pork chops with sweet fried plantains.',
        price: 120.00,
        image: 'images/Grilled Pork with Fried Plantain.jpg',
        category: 'dinner'
    },
    {
        id: '710',
        name: 'Yam Porridge with Fish',
        description: 'Creamy yam porridge cooked with fresh fish and spices.',
        price: 100.00,
        image: 'images/Yam Porridge with Fish.jpg',
        category: 'dinner'
    },
    {
        id: '711',
        name: 'Vegetable Stir Fry with Rice',
        description: 'Colorful vegetable stir fry served with fluffy rice.',
        price: 80.00,
        image: 'images/Vegetable Stir Fry with Rice.jpg',
        category: 'dinner'
    },
    {
        id: '800',
        name: 'Fresh Orange Juice',
        description: 'Freshly squeezed orange juice, bursting with citrus flavor.',
        price: 20.00,
        image: 'images/Fresh Orange Juice.jpg',
        category: 'drinks',
        isHot: true,
    },
    {
        id: '801',
        name: 'Pineapple Juice',
        description: 'Sweet and refreshing pineapple juice, made fresh.',
        price: 20.00,
        image: 'images/Pineapple Juice.jpg',
        category: 'drinks'
    },
    {
        id: '802',
        name: 'Mango Juice',
        description: 'Tropical mango juice, blended to perfection.',
        price: 20.00,
        image: 'images/Mango Juice.jpg',
        category: 'drinks'
    },
    {
        id: '803',
        name: 'Coca-Cola',
        description: 'Classic Coca-Cola, chilled and refreshing.',
        price: 10.00,
        image: 'images/Coca-Cola.jpg',
        category: 'drinks'
    },
    {
        id: '804',
        name: 'Fanta',
        description: 'Zesty Fanta orange soda, served ice-cold.',
        price: 10.00,
        image: 'images/Fanta.jpg',
        category: 'drinks'
    },
    {
        id: '805',
        name: 'Sprite',
        description: 'Crisp and lemony Sprite, perfect for a refresh.',
        price: 10.00,
        image: 'images/Sprite.jpg',
        category: 'drinks'
    },
    {
        id: '806',
        name: 'Bottled Water',
        description: 'Pure and refreshing bottled water.',
        price: 5.00,
        image: 'images/Bottled Water.jpg',
        category: 'drinks'
    },
    {
        id: '807',
        name: 'Sparkling Water',
        description: 'Bubbly sparkling water, crisp and invigorating.',
        price: 15.00,
        image: 'images/Sparkling Water.jpg',
        category: 'drinks'
    },
    {
        id: '808',
        name: 'Red Wine',
        description: 'A rich and bold red wine, perfect for dinner.',
        price: 50.00,
        image: 'images/Red Wine.jpg',
        category: 'drinks'
    },
    {
        id: '809',
        name: 'White Wine',
        description: 'A crisp and light white wine, great with seafood.',
        price: 50.00,
        image: 'images/White Wine.jpg',
        category: 'drinks'
    },
    {
        id: '810',
        name: 'Cocktail (Mojito)',
        description: 'A refreshing mojito with mint, lime, and rum.',
        price: 40.00,
        image: 'images/Cocktail (Mojito).jpg',
        category: 'drinks',
        isHot: true,
    },
    {
        id: '811',
        name: 'Cocktail (Pina Colada)',
        description: 'A creamy pina colada with pineapple and coconut.',
        price: 40.00,
        image: 'images/Cocktail (Pina Colada).jpg',
        category: 'drinks'
    },
    {
        id: '900',
        name: 'Kingstel Signature Platter',
        description: 'A premium selection of local and international delicacies, exclusive to Kingstel.',
        price: 200.00,
        image: 'images/Kingstel Signature Platter.jpg',
        category: 'special',
        isHot: true,
    },
    {
        id: '901',
        name: 'JohnSon Platter',
        description: 'A delightful platter featuring grilled lobster tail, shrimp, and seasonal vegetables.',
        price: 350.00,
        image: 'images/JohnSon Platter.jpg',
        category: 'special',
        isHot: true,
    },
    {
        id: '902',
        name: 'Seafood Platter',
        description: 'A lavish seafood platter with lobster, crab, and shrimp, served with garlic butter.',
        price: 280.00,
        image: 'images/Seafood Platter.jpg',
        category: 'special'
    },
    {
        id: '903',
        name: 'Yaunchon',
        description: 'A traditional Ghanaian dish made with yam, fish, and spicy pepper sauce.',
        price: 180.00,
        image: 'images/Yaunchon.jpg',
        category: 'special'
    },
    {
        id: '904',
        name: 'Seafood pizza',
        description: 'A delicious pizza topped with shrimp, crab, and fresh herbs.',
        price: 180.00,
        image: 'images/Seafood pizza.jpg',
        category: 'special'
    },
    {
        id: '905',
        name: 'Kingstel Special lorers pizza',
        description: 'A delicious pizza topped with shrimp, crab, and fresh herbs.',
        price: 120.00,
        image: 'images/Kingstel Special lorers pizza.jpg',
        category: 'special'
    },
    {
        id: '906',
        name: 'Kingstel Cuisine',
        description: 'A delicious pizza topped with shrimp, crab, and fresh herbs.',
        price: 140.00,
        image: 'images/Kingstel Special lorers pizza.jpg',
        category: 'special'
    },
    {
        id: '907',
        name: 'Kingstel Special Salad',
        description: 'A delicious pizza topped with shrimp, crab, and fresh herbs.',
        price: 140.00,
        image: 'images/Special Salad.jpg',
        category: 'special'
    }
];

let cart = [];
let customerType = null;
let customerDetails = null;

// Preload images for hot items to prevent flashing
function preloadHotImages() {
    const hotItems = menuItems.filter(item => item.isHot);
    hotItems.forEach(item => {
        const img = new Image();
        img.src = item.image || fallbackImage;
    });
}

function createMenuItem(item, isHotItem = false) {
    const isGuest = customerType === 'guest';
    if (item.hotelOnly && !isGuest) return null;
    if (item.guestOnly1 && !isGuest) return null;

    const displayPrice = isGuest || !item.externalPrice ? item.price : item.externalPrice;

    const div = document.createElement('div');
    div.className = isHotItem ? 'hot-item' : 'menu-item';
    div.innerHTML = `
        <img src="${item.image || fallbackImage}" alt="${item.name}" ${isHotItem ? '' : 'loading="lazy"'} onerror="this.src='${fallbackImage}'">
        <div class="${isHotItem ? 'hot-item-content' : 'menu-item-content'}">
            ${isHotItem ? '<span class="hot-badge">Hot</span>' : ''}
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="flex">
                <p>₵${displayPrice.toFixed(2)}</p>
                <button class="btn btn-primary" onclick="addToCart('${item.id}')">Order Now</button>
            </div>
        </div>
    `;
    return div;
}

function updateMenuDisplay(searchQuery = '', categoryFilter = '') {
    const isGuest = customerType === 'guest';
    const categories = ['special', 'breakfast', 'lunch', 'dinner', 'drinks'];
    let hasResults = false;

    categories.forEach(category => {
        const container = document.querySelector(`#${category}-items`);
        const section = document.querySelector(`#${category}`);
        if (!container || !section) return;

        container.innerHTML = '';
        const filteredItems = menuItems.filter(item => {
            const matchesCategory = !categoryFilter || item.category === categoryFilter;
            const matchesSearch = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.description.toLowerCase().includes(searchQuery.toLowerCase());
            const isAvailable = (!item.hotelOnly && !item.guestOnly1) || (item.hotelOnly && isGuest) || (item.guestOnly1 && isGuest);
            return item.category === category && matchesCategory && matchesSearch && isAvailable;
        });

        filteredItems.forEach(item => {
            const itemElement = createMenuItem(item);
            if (itemElement) container.appendChild(itemElement);
        });

        section.classList.toggle('hidden', filteredItems.length === 0);
        if (filteredItems.length > 0) hasResults = true;
    });

    const hotItemsContainer = document.querySelector('.hot-items-scroll');
    if (hotItemsContainer) {
        hotItemsContainer.innerHTML = '';
        const hotItems = menuItems.filter(item => item.isHot && (!item.hotelOnly || isGuest) && (!item.guestOnly1 || isGuest));
        hotItems.forEach(item => {
            const itemElement = createMenuItem(item, true);
            if (itemElement) hotItemsContainer.appendChild(itemElement);
        });
    }

    const noResults = document.querySelector('#no-results');
    if (noResults) noResults.classList.toggle('hidden', hasResults);
}

function initHotItemsScroll() {
    const container = document.querySelector('.hot-items-scroll');
    if (!container) {
        console.error('Hot items scroll container not found');
        return;
    }
    console.log('Initializing hot items scroll');

    let isDown = false;
    let startX;
    let scrollLeft;
    let isAutoScrolling = true;

    // Auto-scroll using requestAnimationFrame
    function autoScroll() {
        if (!isAutoScrolling) return;

        container.scrollLeft += 1; // Scroll 1 pixel per frame for smooth movement

        // Reset to start for seamless looping
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            container.scrollLeft = 0;
            console.log('Reached end, resetting to start');
        }

        requestAnimationFrame(autoScroll);
    }

    // Start auto-scroll
    requestAnimationFrame(autoScroll);

    // Pause auto-scroll
    function stopAutoScroll() {
        isAutoScrolling = false;
        console.log('Auto-scroll paused');
    }

    // Resume auto-scroll
    function startAutoScroll() {
        isAutoScrolling = true;
        requestAnimationFrame(autoScroll);
        console.log('Auto-scroll resumed');
    }

    // Pause on hover
    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('mouseleave', startAutoScroll);

    // Drag-to-scroll functionality
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        container.style.cursor = 'grabbing';
        stopAutoScroll();
        console.log('Drag started');
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
        startAutoScroll();
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
        startAutoScroll();
        console.log('Drag ended');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });

    container.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        stopAutoScroll();
        console.log('Touch drag started');
    });

    container.addEventListener('touchend', () => {
        isDown = false;
        startAutoScroll();
        console.log('Touch drag ended');
    });

    container.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
}

function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const isGuest = customerType === 'guest';
    const itemPrice = isGuest || !item.externalPrice ? item.price : item.externalPrice;

    const existingItem = cart.find(i => i.id === itemId);
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cart.push({ ...item, price: itemPrice, quantity: 1 });
    }

    updateCartDisplay();
    Toastify({
        text: `${item.name} added to cart!`,
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        backgroundColor: '#d97706',
    }).showToast();
}

function updateCartDisplay() {
    const cartItemsContainer = document.querySelector('#cart-items');
    const cartTotalElement = document.querySelector('#cart-total');
    const stickyCartCount = document.querySelector('#sticky-cart-count');

    if (!cartItemsContainer || !cartTotalElement || !stickyCartCount) return;

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * (item.quantity || 1);
        total += itemTotal;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div>
                <p>${item.name}</p>
                <p>₵${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button class="delete-item" onclick="removeFromCart('${item.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });

    cartTotalElement.textContent = `₵${total.toFixed(2)}`;
    stickyCartCount.textContent = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
}

function removeFromCart(itemId) {
    const itemIndex = cart.findIndex(i => i.id === itemId);
    if (itemIndex === -1) return;

    const item = cart[itemIndex];
    if (item.quantity > 1) {
        item.quantity -= 1;
    } else {
        cart.splice(itemIndex, 1);
    }

    updateCartDisplay();
    Toastify({
        text: `${item.name} removed from cart!`,
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        backgroundColor: '#dc2626',
    }).showToast();
}

function toggleCart() {
    const cartModal = document.querySelector('#cart-modal');
    if (cartModal) {
        cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
    }
}

function submitOrder() {
    if (cart.length === 0) {
        Toastify({
            text: 'Your cart is empty! 🍽️',
            duration: 2000,
            gravity: 'bottom',
            position: 'right',
            backgroundColor: '#dc2626',
        }).showToast();
        return;
    }

    const orderDetails = {
        customer: customerDetails,
        items: cart,
        total: cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0),
        timestamp: new Date().toISOString(),
    };

    // Format WhatsApp message
    const itemList = cart.map((item, index) => 
        `${index + 1}️⃣ ${item.quantity}x ${item.name} - ₵${item.price.toFixed(2)}\n━━━━━━━━━━━━━━━━━━━━━`
    ).join('\n');
    const orderTime = new Date().toLocaleTimeString('en-GB', { hour12: false });
    const whatsappMessage = `
🏨 Kingstel Hotel Restaurant Service
${customerType === 'guest' ? `🔢 Room Number: ${customerDetails.room}\n` : ''}
👤 Customer Name: ${customerDetails.name}
📞 Phone: ${customerDetails.phone}

📋 Order Details:
━━━━━━━━━━━━━━━━━━━━━
${itemList}
💵 Total: ₵${orderDetails.total.toFixed(2)}

🕒 Order Time: ${orderTime}

📌 Thank you for ordering with Kingstel Hotel! Your meal will be served shortly. 🍽️
    `.trim();

    // Encode message to preserve emojis
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://api.whatsapp.com/send?phone=+233599210911&text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');

    console.log('Order submitted:', orderDetails);
    Toastify({
        text: 'Order submitted successfully! 📦',
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        backgroundColor: '#d97706',
    }).showToast();

    cart = [];
    updateCartDisplay();
    toggleCart();
}

function selectCustomerType(event, type) {
    customerType = type;
    const buttons = document.querySelectorAll('.customer-type-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const roomInput = document.querySelector('#room-input');
    const addressInput = document.querySelector('#address-input');
    if (roomInput && addressInput) {
        roomInput.classList.toggle('hidden', type !== 'guest');
        addressInput.classList.toggle('hidden', type === 'guest');
        roomInput.querySelector('input').required = type === 'guest';
        addressInput.querySelector('textarea').required = type !== 'guest';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const customerPrompt = document.querySelector('#customer-prompt');
    if (customerPrompt) {
        customerPrompt.style.display = 'flex';
    }

    const customerForm = document.querySelector('#customer-form');
    if (customerForm) {
        customerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validate customer type
            if (!customerType) {
                Toastify({
                    text: 'Please select whether you are a Guest or External customer 😊',
                    duration: 3000,
                    gravity: 'bottom',
                    position: 'right',
                    backgroundColor: '#dc2626',
                }).showToast();
                return;
            }

            const name = document.querySelector('#customer-name').value;
            const phone = document.querySelector('#customer-phone').value;
            const room = document.querySelector('#room-number')?.value;
            const address = document.querySelector('#delivery-address')?.value;

            if (!phoneRegex.test(phone)) {
                Toastify({
                    text: 'Please enter a valid 10-digit phone number.',
                    duration: 2000,
                    gravity: 'bottom',
                    position: 'right',
                    backgroundColor: '#dc2626',
                }).showToast();
                return;
            }

            if (customerType === 'guest' && !roomRegex.test(room)) {
                Toastify({
                    text: 'Please enter a valid room number (101-502).',
                    duration: 2000,
                    gravity: 'bottom',
                    position: 'right',
                    backgroundColor: '#dc2626',
                }).showToast();
                return;
            }

            customerDetails = { name, phone, room: customerType === 'guest' ? room : null, address: customerType === 'external' ? address : null };
            customerPrompt.style.display = 'none';
            updateMenuDisplay();

            const userInfo = document.querySelector('#user-info');
            const userName = document.querySelector('.user-name');
            const userType = document.querySelector('.user-type');
            if (userInfo && userName && userType) {
                userInfo.classList.remove('hidden');
                userName.textContent = name;
                userType.textContent = customerType === 'guest' ? 'Hotel Guest' : 'External Customer';
            }
        });
    }

    const searchInput = document.querySelector('#search-input');
    const categoryFilter = document.querySelector('#category-filter');
    if (searchInput && categoryFilter) {
        searchInput.addEventListener('input', () => updateMenuDisplay(searchInput.value, categoryFilter.value));
        categoryFilter.addEventListener('change', () => updateMenuDisplay(searchInput.value, categoryFilter.value));
    }

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const closeMenuBtn = document.querySelector('.close-menu-btn');
    if (mobileMenuBtn && navLinks && closeMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    }

    const logoutBtn = document.querySelector('#logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            customerType = null;
            customerDetails = null;
            cart = [];
            updateCartDisplay();
            document.querySelector('#user-info').classList.add('hidden');
            customerPrompt.style.display = 'flex';
            updateMenuDisplay();
        });
    }

    preloadHotImages();
    initHotItemsScroll();
    updateMenuDisplay();
});