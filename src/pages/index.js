import React, { Component } from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default class IndexPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Header 
                    title="Grupo de Estudos em NLP - UFFS"
                    subtitle="Ea pariatur ea cupidatat irure in enim incididunt elit consectetur cupidatat."
                />

                <p>Consequat minim ipsum exercitation minim. Ad dolor consectetur incididunt exercitation in adipisicing nisi nisi anim reprehenderit. Cillum laboris ut excepteur non minim.

Ipsum non fugiat culpa cupidatat. Occaecat nisi cillum dolore ipsum. Fugiat est id adipisicing ut aliquip amet cillum incididunt proident ea pariatur minim. Laborum eiusmod enim aliqua amet culpa qui anim irure aliquip ut minim culpa cupidatat. Cupidatat consequat proident nostrud elit dolore laborum. Cillum cupidatat nisi commodo velit sint duis enim eiusmod amet nostrud aute. Sit minim veniam elit proident nisi velit.

Dolore ipsum nisi labore non fugiat minim irure dolor voluptate consequat ad aute. Minim aute fugiat dolor elit incididunt excepteur fugiat ullamco aute occaecat. Eu qui aute nisi dolore officia ad Lorem. Esse non do deserunt ullamco excepteur amet. Do elit aute officia labore esse id aute nisi qui. Non minim aliqua eu proident minim dolore labore in.

Esse proident enim consectetur do do. Velit nulla Lorem quis consectetur nisi officia voluptate commodo elit. Excepteur consequat anim officia anim culpa id eiusmod sunt sit consequat officia pariatur excepteur. Veniam occaecat aliquip consectetur consectetur sint aute deserunt ea aliqua officia.

Adipisicing excepteur non enim ea. Sunt aliqua laboris non nulla minim exercitation deserunt eu sint officia id fugiat cillum duis. Nisi non veniam cillum esse excepteur. Non ipsum qui quis adipisicing cillum officia Lorem enim amet commodo.

Cupidatat commodo veniam ex ad. Eu ut est ut excepteur officia ea minim excepteur amet pariatur cupidatat. Nostrud do enim est quis quis est cupidatat culpa dolor deserunt sint. Occaecat quis velit id id consequat nisi magna consectetur magna et qui mollit sunt laborum. Ad fugiat est aliqua do elit minim. Irure fugiat veniam irure exercitation nostrud exercitation veniam est eiusmod non occaecat amet.</p>
            </div>
        )
    }
}
