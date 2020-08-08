import React from "react";
import axios from "axios";

class FriendsTable extends React.Component {
    state = {
        friends: [],
        order: "ascending"
    }

    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=10&nat=us").then((res) => {
                console.log(res.data);
                this.setState({friends: res.data.results});
            });
    }

    handleFirstNameSort = () => {
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
                if (a.name.first < b.name.first) {
                    return -1;
                }
                else if (b.name.first < a.name.first) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
            else {
                if (a.name.first < b.name.first) {
                    return 1;
                }
                else if (b.name.first < a.name.first) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        })

        return <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th onClick={this.handleFirstNameSort} scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedFriends.map((elem) => {
                        return (
                            <tr>
                                <th scope="row">1</th>
                                <td>{elem.name.first}</td>
                                <td>{elem.name.last}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    }
}

export default FriendsTable;