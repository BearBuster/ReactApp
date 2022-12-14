import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder={"Поиска Поста по названию"}
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) => setFilter({...filter, sort: selectedSort})}
                defaultValue={"Сортировка"}
                options={[
                    {value: "title", name: "По Названию"},
                    {value: "description", name: "По Описанию"}
                ]}
            />
        </div>
    );
};

export default PostFilter;