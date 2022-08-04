import { Injectable } from "@angular/core";
import { Food } from "../models/food.model";

@Injectable({
    providedIn: 'root'
})
export class FoodService {
    getFoods(): Food[]{
        return [
            {
                id:1,
                title: 'RED VELVET',
                price: 60,
                image:'assets/images/red_velvet.png',
                description:
                'A red velvet cake made liquid with fragrant vanilla lightly scented with a hint of chocolate served with tapioca pearls slow cooked with Okinawan brown sugar and fresh milk.'
            },
            {
                id:2,
                title: 'OREO',
                price: 65,
                image:'assets/images/oreo.png',
                description:
                'Pour tapioca pearls and milk tea into the cup, then pour cream topping and oreo crumbs on top of the drink.'
            },
            {
                id:3,
                title: 'OKINAWA',
                price: 60,
                image:'assets/images/okinawa.png',
                description:
                'Deviating from traditional tapioca pearls, the Okinawa Boba Co. features crystal boba jelly made from plant based konjac which is both more consistent in texture and healthier than traditional tapioca.'
            },
            {
                id:4,
                title: 'TARO',
                price: 65,
                image:'assets/images/taro.png',
                description:
                'It has a very sweet taste, with a slight hint of vanilla. In taro boba tea, there is sugar and milk added so it will taste much sweeter than eating the vegetable on its own.'
            },
            {
                id:5,
                title: 'DARK CHOCOLATE',
                price: 65,
                image:'assets/images/dark_choco.png',
                description:
                'It tastes a bit like ice-cold hot chocolate, but with an extra surprise (boba pearls) at the bottom.'
            },
            {
                id:6,
                title: 'WINTER MELON',
                price: 60,
                image:'assets/images/wintermelon.png',
                description:
                'Wintermelon Milk Tea are wintermelon syrup, milk, tea (or water) and ice cubes. Tapioca pearls can also be added to turn the drink into bubble tea.'
            },
            {
                id:7,
                title: 'COLD BREW',
                price: 45,
                image:'assets/images/cold_brew.png',
                description:
                'Cold brew coffee is simply a concentrate of coffee that is brewed for many hours at room temperature, then poured over ice and diluted with water, milk, or a milk substitute.'
            },
            {
                id:8,
                title: 'ICED CARAMEL MACCHIATO',
                price: 50,
                image:'assets/images/iced_caramel_macchiato.png',
                description:
                'Caramel Macchiato is made with vanilla syrup, steamed milk, espresso and caramel sauce. The espresso in poured on top of the milk leaving a dark mark on top of the milk foam.'
            },
            {
                id:9,
                title: 'ICED LATTE',
                price: 50,
                image:'assets/images/iced_latte.png',
                description:
                'iced latte is a drink with espresso, milk and optional sweetener.'
            },
            
        ];
    }
    getFood(id: number): Food {
        return this.getFoods().find((food) => food.id === id);
        
    }
}