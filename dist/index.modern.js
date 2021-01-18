import React from 'react';

function List(_ref) {
  var groupName = _ref.groupName,
      _ref$members = _ref.members,
      members = _ref$members === void 0 ? [] : _ref$members;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "1.0.3"), /*#__PURE__*/React.createElement("h5", null, "Group: ", /*#__PURE__*/React.createElement("em", null, groupName)), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("p", null, "Members"), members.map(function (member) {
    return /*#__PURE__*/React.createElement("li", {
      key: member
    }, member);
  })));
}

export { List };
//# sourceMappingURL=index.modern.js.map
