import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

type Nutrients = {
    [key: string]: { desc: string; val: number };
};

const nutrition_items: Nutrients = {
    "energy":
    {
        "desc": "Energy (Kal)",
        "val": 0
    },
    "lipids": {
        "desc": "Lipids (g)",
        "val": 0
        ,
    },
    "carbs": {
        "desc": "Carbohydrates (g)",
        "val": 0,
    },
    "protein": {
        "desc": "Protein (g)",
        "val": 0,
    },
    "saturatedFats": {
        "desc": "Saturated fats (g)",
        "val": 0,
    },
    "calcium": {
        "desc": "Calcium (mg)",
        "val": 0,
    },
    "vitaminD": {
        "desc": "Vitamin D (IU/mcg)",
        "val": 0,
    }
};

function App() {
    const [items, setItems] = useState(nutrition_items);
    const [foodName, setFoodName] = useState("");
    return (
        <>
        <button>AI suggest</button>
            <div>
                Food Name <input onChange={(e)=> setFoodName(e.target.value)}></input>
            </div>
            {
                Object.keys(items).map((key, idx) => (
                    <div key={idx}>
                        {items[key].desc}
                        <input onChange={(e) => {
                            setItems({
                                ...items,
                                [key]: {
                                    "desc": items[key].desc,
                                    "val": parseFloat(e.target.value)
                                }
                            })
                        }}>
                        </input>
                    </div>
                ))
            }
            <button onClick={() => 
                {
                    console.log(foodName);
                    console.log(JSON.stringify(items));
                    // verify input are all numbers
                    Object.keys(items).map((key)=> {
                        // is not numeric
                        if(isNaN(items[key].val))
                           alert(`val in ${key} is not numeric ` ) 
                        return;
                    })
                } 
                }>submit</button>
        </>
    );
}

export default App
