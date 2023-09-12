const foodData = require("../Controller/FoodsData");
const foodrecipe = require("../Model/FoodStructure");

const insert = async (req, res) => {
    const result = await foodrecipe.insertMany(foodData);
    res.send(result);
};
const fetch=async (req,res)=>{
    const {category,label}=req.params
    const result=await foodrecipe.find({$or: [{ category: category },{ label: label }]
    })
    return res.send(result)
}

module.exports = { insert,fetch};



// {
//     category:"breakfast",
//     label:"BREAKFAST & BRUNCH RECIPES",
//     comment:"No morning is complete without a good meal, and we have all the wake up-worthy breakfast recipes to start your day off right.",
//     label1:"TOP 100 BREAKFAST & BRUNCH RECIPES",
//     heading:"THE CLASSICS",
//     label2:"48 TOP PANCAKE & WAFFLE RECIPES",
//     label3:"EGGS FOR BREAKFAST: 59 WAYS",
//     label4:"27 BREAKFAST ESSENTIALS",
//     label5:"HOW TO MAKE OAT MILK AT HOME",
//     comment1:"Love a tall glass of oat milk—or a splash in your coffee—but can't stand paying a fortune for the industrial stuff? Here's a simple, three-ingredient recipe for this dairy-free alternative.",
//     heading1:"TRY SOMETHING NEW",
//     label6:"BREAKFAST RECIPES WITH NO EGGS",
//     label7:"RISE-AND-SHINE CASSEROLES",
//     label8:"INTERNATIONAL BREAKFAST IDEAS",
//     label9:"THE TOP BREAKFAST RECIPE IN EVERY STATE",
//     comment2:"Start your day with iconic recipes from Alabama to Wyoming.",
//     heading3:"SOMETHING SWEET",
//     label10:"BEST GRANOLA RECIPES",
//     label11:"CREATIVE CREPES THAT'LL MAKE YOUR MORNING",
//     label12:"MONKEY BREAD FOR EVERY OCCASION",
//     label13:"FAVORITE FRENCH TOAST RECIPES",
//     label14:"HOW TO MAKE COLD BREW COFFEE",
//     label15:"31 5-INGREDIENT BREAKFASTS TO WAKE UP WITH",
//     comment3:"Making breakfast should never be harder than waking up, which is why we rounded up these ultimate easy morning recipes.",
//     heading4:"QUICK & EASY",
//     label16:"12 QUICK BREAKFAST SMOOTHIES",
//     label17:"17 MICROWAVE BREAKFASTS",
//     label18:"17 EASY COFFEE DRINKS",
//     label19:"45 BEST QUICHES RECIPES",
//     comment4: "There's no bad time to serve quiche—especially one of these fan-favorite version!",
//     heading5:"ON-THE-GO EATS",
//     label20:"44 BREAKFAST BURRITOS",
//     label21:"OVERNIGHT OATS, 11 WAYS",
//     label22:"28 BEST BREAKFAST SANDWICHES",
//     label23:"33 MAKE-AHEAD BREAKFAST IDEAS",
//     comment5:"Goodbye, cold cereal! Prep these filling recipes in advance and then simply reheat them as needed during busy weekday mornings.",
//     heading6:"TOAST WITH THE MOST",
//     label24:"CREAMED EGGS ON TOAST",
//     label25:"AVOCADO TOAST WITH ZA'ATAR",
//     label26:"PEANUT BUTTER & TOMATO TOAST",
//     label27:"18 PROTEIN-PACKED BREAKFASTS",
//     comment6:"These super-charged recipes will help you start your day with a full tank of energy.",
//     img:"https://imgstore.sndimg.com/f_auto,c_thumb,q_55,w_1280,ar_5:2/foodcom/images/c40762cc-641a-4fc9-aeff-2a30babc7b3b.jpg",
//     img1:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/36/21/99/7YOiCPxdTkeIVDQ8e9w2_0S9A3939.jpg",
//     img2:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/23/22/5/bDrqWavHSnG7MshUgTCT_oatmealwaffles3.jpg",
//     img3:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/27/73/67/2AGbtmDORUmBhG9TCede_0S9A3649.jpg",
//     img4:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/92/16/0/rnGQtqWKQCSEMX2esZ4X_Bacon%252C%2520Egg%2520And%2520Cheddar%2520Scones_final%25202.jpg",
//     img5:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/upload/editorial/0-Contrib/JonathanMelendez/oatmilk/19-Oat-Milk_HERO.jpg",
//     img6:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/53/02/87/SKEf0oHpRlC5aFjs4Jai_milk-cereal-popsicles-trix-3938.jpg",
//     img7:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/29/36/57/9yiru0CBTwua9OdF4qaE_totcasserole.jpg",
//     img8:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/25/11/66/PtHb5ID1SJy3aH74asLp_friedrice2%2520(1%2520of%25201).jpg",
//     img9:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/44/76/07/BONG6hZSgW9mAw6fKAw2_smoked-salmon-horesradish-cream-pancakes-2705.jpg",
//     img10:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_350,ar_4:3/v1/img/recipes/49/99/65/picKQ5m3M.jpg",
//     img11:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_350,ar_4:3/v1/img/recipes/19/10/1/Jj5MsmydQCOmgagShSSU_choc%20crepes%20SITE-3.jpg",
//     img12:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_350,ar_4:3/v1/img/recipes/47/85/20/npPc9B4Tf9O7gABeaHgO_Pioneer%2520womans%2520monkey%2520bread%2520478520-8.jpg",
//     img13:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_350,ar_4:3/v1/img/recipes/53/56/17/XpfpCASGQgSPW4PQMdJU_0S9A5532.jpg",
//     img14:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/upload/editorial/how-to-cold-brew/cold-brew-coffee-beauty-2.jpg",
//     img15:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/51/30/62/mh16i4krTLeNEoEnP0Mw_EIC%25203%25204%2520-%2520final_2.jpg",
//     img16:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/28/32/73/Jeq4z4XSD6DwgnKb4nMQ_blueberrygreenteasmoothie3.jpg",
//     img17:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/11/74/12/LRpYgiiWRiiQTpw0ttKF_peach%2520oats-1.jpg",
//     img18:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/10/65/95/WFxZTwIySZeAx9oQY0rv_thai-iced-coffee%2520(2%2520of%25204).jpg",
//     img19:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/65/75/8/msgH6Qh6fKeBsmuOOww4_QUICHE_LORRAINE_056.jpg",
//     img20:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/24/17/28/VKExjrzgTn8a0r18M54g_0S9A5142.jpg",
//     img21:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/submissions/recipe/2001201872/YGiW881QVU3IcrxiOrNA_untitled-6459.jpg",
//     img22:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_750,ar_1:1/v1/img/recipes/53/41/75/QrKIyDpSRkmaXxhnDPkl_0S9A3270.jpg",
//     img23:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/52/93/96/EOEJo2quQUK31lUy3Wbe_DSC03146-2.jpg",
//     img24:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_350,ar_4:3/v1/img/recipes/50/81/6/XIACZdAqRsGaSo2Ckjzd_creamed-eggs-on-toast_3406.jpg",
//     img25:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_350,ar_4:3/v1/img/recipes/53/65/45/WFigP3FmTMyRLfLe6xQ5_0S9A9596.jpg",
//     img26:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_350,ar_4:3/v1/img/recipes/53/65/45/WFigP3FmTMyRLfLe6xQ5_0S9A9596.jpg",
//     img27:"https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_1280,ar_16:9/v1/img/recipes/10/40/52/XZ0f1Ig0RDq7nEDlHKXG_english-breakfast-sausage_0512.jpg",
//     },