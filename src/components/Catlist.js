import React from "react";
import { Cat } from "./Cat";
import { catsApi } from "./CatsApi";
import { AddCat } from "./AddCat";



export class CatList extends React.Component {
    state = {
        cats:[]
    };

    componentDidMount() {
        this.fetchCats();
    }

    fetchCats = async () => {
        const cats = await catsApi.get();
        this.setState({cats});
        console.log(cats);
    }; 

    updateCat = async (updateCat) => {
        await catsApi.put(updateCat);
        this.fetchCats();
    };

    /*Cat = ({ cat, addCat }) => {

        const submitHandler = (e) => {
            e.preventDefault();
            addCat(cat.id, e.target.name.value);
            e.target.reset();
        }*/

    render(){
        return(
            <div className='cat-list'>
                {this.state.cats.map((cat) =>(
                    <Cat
                        cat = {cat}
                        key = {cat.id}
                        addNewCat = {this.updateCat}
                        />
                    
                ))}
            
            </div>
        )
    }
}