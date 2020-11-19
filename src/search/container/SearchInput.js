import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import React from 'react';

export default function SearchInput() {
    function setKeyword(value){}
    function gotoUser(value){}

    return (
      <AutoComplete 
        value={keyword} 
        onChange = {setKeyword}
        onSelect={gotoUser}
        style={{ width: '100%' }}
        options={[]}
        autoFocus
      >
           <Input size="large" placeholder="input here" prefix={<SearchOutlined />} />
      </AutoComplete>
    );
}
