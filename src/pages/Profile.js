import React, {Component, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth} from "../services/firebase";
import Board, { moveCard } from "@asseinfo/react-kanban";
import '@asseinfo/react-kanban/dist/styles.css'
import {Link} from "react-router-dom";
import "../App.css";




export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            user: auth().currentUser
        };
    }

    componentDidMount() {}


    render() {
        const board = {
            columns: [
                {
                    id: 1,
                    title: "In process of learning",
                    cards: [
                        {
                            id: 1,
                            title: "Card title 1",
                            description: "Card content"
                        },
                        {
                            id: 2,
                            title: "Card title 2",
                            description: "Card content"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Will learn",
                    cards: [
                        {
                            id: 3,
                            title: "Card title 3",
                            description: "Card content"
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Learned",
                    cards: [
                        {
                            id: 4,
                            title: "Card title 4",
                            description: "Card content"
                        },
                        {
                            id: 5,
                            title: "Card title 5",
                            description: "Card content"
                        }
                    ]
                }
            ]
        };
        function UncontrolledBoard() {
            return (
                <Board
                    allowRemoveLane
                    allowRenameColumn
                    allowRemoveCard
                    onLaneRemove={console.log}
                    onCardRemove={console.log}
                    onLaneRename={console.log}
                    initialBoard={board}
                    allowAddCard={{ on: "top" }}
                    onNewCardConfirm={draftCard => ({
                        id: new Date().getTime(),
                        ...draftCard
                    })}
                    onCardNew={console.log}
                />
            );
        }

        return (
            <div>
                <Header />
                <div className="ml-4">
                    Login in as: <strong>{this.state.user.email}</strong>
                </div>
                <div>
                    <Link className="btn btn-success ml-4" to="/Quiz">Quiz</Link>
                </div>
                <UncontrolledBoard />

                <Footer />
            </div>
        );
    }
}
