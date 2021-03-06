import React from "react";
import Skinview3d from 'react-skinview3d';
import './Types'
import { SkinRendererProps } from "./Types";
import {Button} from "semantic-ui-react";
import './SkinRenderer.scss'



export default class SkinRenderer extends React.Component<SkinRendererProps, any> {
    base_url: string;
    constructor(props: SkinRendererProps) {
        super(props);
        this.state = {skinUrl: '/Skins/steve.png'};
        this.base_url = 'https://cors-anywhere.herokuapp.com/';
    }

    render() {
        return (
            <div className='SkinRendererOuterContainer'>
                <div className='SkinRendererInnerContainer'>
                    <div className='skinRenderContainer'>
                        <Skinview3d
                            skinUrl={this.props.url ? this.base_url + this.props.url :  this.state.skinUrl}
                            className='SkinRender'
                            height='600'
                            width='600'
                        />
                        <form method="get" action={this.props.url || this.state.skinUrl}>
                            <Button type='submit' className='DownloadButton'>Download</Button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

