import React from "react";
import styled from 'styled-components';
import { Form, Image, Card } from "semantic-ui-react";
import { AccountConsumer } from '../providers/AccountProvider';
import Avatar1 from "./Avatar-Maker (1).png";
import Avatar2 from "./Avatar-Maker (2).png";
import Avatar3 from "./Avatar-Maker (3).png";
import Avatar4 from "./Avatar-Maker (4).png";
import Avatar5 from "./Avatar-Maker (5).png";
import Avatar6 from "./Avatar-Maker (6).png";

class AccountForm extends React.Component {
  state = {
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    email: this.props.email,
    aboutMe: this.props.aboutMe,
    avatar: this.props.avatar,
    friendCount: this.props.friendCount,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault();
    const account = { ...this.state, };
    this.props.updateAccount(account);
  }

  render() {
    const { firstName, lastName, email, aboutMe, avatar, friendCount, } = this.state;
    return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="First Name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Last Name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            type="text-field"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Form.Input
            label="About Me"
            type="text"
            name="aboutMe"
            value={aboutMe}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Friend Count"
            type="text"
            name="friendCount"
            value={friendCount}
            onChange={this.handleChange}
          />
          <Form.Select
            label="Avatar"
            name="avatar"
            value={avatar}
            onChange={this.handleChange}
            options={avatarOptions}
          />
          <StyledButton as= {Form.Button} color="green">Save</StyledButton>
        </Form>
    )
  }
}


const ConnectedAccountForm = props => {
  return (
    <AccountConsumer>
      {value => (
        <AccountForm
          {...props}
          firstName={value.firstName}
          lastName={value.lastName}
          email={value.email}
          aboutMe={value.aboutMe}
          avatar={value.avatar}
          friendCount={value.friendCount}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  )
};


const avatarOptions = [
  {
    text: <div><Image src={Avatar1} height="40px" width="40px" />Pink Girl</div>,
    value: <Card><Image src={Avatar1} wrapped ui={false}/></Card>
  },
  {
    text: <div><Image src={Avatar2} height="40px" width="40px" />Redhead Girl</div>,
    value: <Card><Image src={Avatar2} wrapped ui={false}/></Card>
  },
  {
    text: <div><Image src={Avatar3} height="40px" width="40px" />Old Man</div>,
    value: <Card><Image src={Avatar3} wrapped ui={false}/></Card>
  },
  {
    text: <div><Image src={Avatar4} height="40px" width="40px" />Business Man</div>,
    value: <Card><Image src={Avatar4} wrapped ui={false}/></Card>
  },
  {
    text: <div><Image src={Avatar5} height="40px" width="40px" />Casual Man</div>,
    value: <Card><Image src={Avatar5} wrapped ui={false}/></Card>
  },
  {
    text: <div><Image src={Avatar6} height="40px" width="40px" />Young Man</div>,
    value: <Card><Image src={Avatar6} wrapped ui={false}/></Card>
  }
];

const StyledButton = styled.div`
  display: flex;
  color:white;
  padding: 15px;
  justify-content: center;
  transition: background 0.2s ease;
  cursor: pointer;
`;


export default ConnectedAccountForm;