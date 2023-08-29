import React, { useState, useEffect } from "react";
import Dropdown from "../components/Dropdown";

const CommonTest = () => {
  const [menuItems, setMenuItems] = useState([]);

  const handleInOutComesChange = (itemId) => {
    setInOutComesId(itemId);
    if (itemId === 1) {
      setSelectedPaymentId(null);
    }
  };

  return (
    <>
      <Dropdown
        menu={menuItems}
        defaultKey={{ key: 1, label: "지출" }}
        className="dropdown"
        onItemSelect={handleInOutComesChange}
      />
      {/* <Dropdown
        id="myDropdown"
        menu={menuItems} // 메뉴 아이템들의 배열을 전달하세요.
        add={true} // 메뉴에 항목 추가 옵션을 사용하려면 true로 설정하세요.
        onAddItem={handleAddItem} // 항목 추가 시 호출되는 함수를 전달하세요.
        defaultKey={{ key: 1, label: "Default" }} // 기본 선택 항목을 설정하세요.
        onItemSelect={handleInOutComesChange} // 항목 선택 시 호출되는 함수를 전달하세요.
      /> */}
    </>
  );
};

export default CommonTest;
