import {Avatar} from "antd";
import React, {useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import style from "../../DefaultLayout/header/UserProfileMenu/UserProfileMenu.module.css";
import auth from "../../../services/auth/Auth";
import setUser from "./actions/setUser";

const UserAvatar = ({displayUsername, ...rest}) => {
  const ColorHash = require('color-hash');
  const colorHash = new ColorHash();

  const user = useSelector(state => state.user, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user.username) {
      auth.getUser().then((response) => {
        dispatch(setUser(response.data));
      })
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const getInitials = () => {
    const fullName = `${user.firstName} ${user.lastName}`;
    const nameParts = fullName.split(' ');
    return nameParts.map(part => part[0]).join('');
  };

  return (
    <React.Fragment>
      <Avatar
        style={{backgroundColor: colorHash.hex(user.username)}}
        {...rest}
      >
        { getInitials() }
      </Avatar>
      {displayUsername && <span className={style.ProfileText}>{user.firstName} {user.lastName} ({user.username})</span>}
    </React.Fragment>
  )
};

export default UserAvatar;
