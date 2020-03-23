import React from "react";
import Avatar3 from "../components/Avatar-Maker (3).png";
import { Image, Card, } from "semantic-ui-react";

const AccountContext = React.createContext();

export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends React.Component {
  state = {
    firstName: "George",
    lastName: "Banks", 
    email: "grandpageorge@zmail.com", 
    aboutMe: "A retired pediatrician who enjoys fishing solitaire and spending time with my three grand-children",
    avatar: <Card><Image src={Avatar3} wrapped ui={false}/></Card>,
    friendCount: "22",
    updateAccount: (account) => this.updateAccount(account),
  };

  
  updateAccount = (account) => {
    this.setState({
      firstName: account.firstName,
      lastName: account.lastName,
      email: account.email,
      aboutMe: account.aboutMe,
      avatar: account.avatar,
      friendCount: account.friendCount,
    });
  }
  render() {
    return (
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
};

export default AccountProvider; 