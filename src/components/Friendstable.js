import React from "react";
import friends from "./friends.json";

class FriendsTable extends React.Component {
    state = {
        friends: friends,
        order: "ascending"
    }

    handleNameSort = () => {
        if (this.state.order === "ascending") {
            this.setState({ order: "descending" });
        }
        else {
            this.setState({ order: "ascending" });
        }
    }

    render() {
        const sortedFriends = this.state.friends.sort((a, b) => {
            if (this.state.order === "ascending") {
                if (a.name < b.name) {
                    return -1;
                }
                else if (b.name < a.name) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else {
                if (a.name < b.name) {
                    return 1;
                }
                else if (b.name < a.name) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        })

        return <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th onClick={this.handleNameSort} scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedFriends.map((elem) => {
                        return (
                        <tr key={elem.id}>
                            <th scope="row">1</th>
                            <td>{elem.name}</td>
                            <td>{elem.occupation}</td>
                            <td>{elem.location}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    }
}

export default FriendsTable;