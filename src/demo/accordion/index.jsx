import React from 'react';
import {Link} from 'react-router';
import { Accordion } from '../../components';

export default class ListDemo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="accordion">
      
        <h1 className="title">accordion=true</h1>
        <Accordion accordion={true}>
          <Accordion.Item title="Item1">
            Item1 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item1 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item1 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item1 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
          </Accordion.Item>
          <Accordion.Item title="Item2">
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节 
          </Accordion.Item>
          <Accordion.Item title="Item3">
            Item3 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节 
            Item3 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item3 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
          </Accordion.Item>
          <Accordion.Item title="Item4">
            Item4 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节 
          </Accordion.Item>
        </Accordion>

        <h1 className="title">accordion=false</h1>
        <Accordion accordion={false}>
          <Accordion.Item title="Item1">
            Item1 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item1 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item1 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item1 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
          </Accordion.Item>
          <Accordion.Item title="Item2">
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item2 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节 
          </Accordion.Item>
          <Accordion.Item title="Item3">
            Item3 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节 
            Item3 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
            Item3 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节
          </Accordion.Item>
          <Accordion.Item title="Item4">
            Item4 我及佛山接发搜附近死哦的计费iOS的计费iOS及覅偶多设计费iOS的及覅偶圣诞节 
          </Accordion.Item>
        </Accordion>
      </div>
    )
  }

}
