import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneLabel,
  PropertyPaneToggle,
  PropertyPaneDropdown,
  PropertyPaneCheckbox,
  PropertyPaneLink,
  PropertyPaneSlider
} from '@microsoft/sp-webpart-base';

import * as strings from 'ReactLearnWebPartStrings';
import ReactLearn from './components/ReactLearn';
import { IReactLearnProps } from './components/IReactLearnProps';

export interface IReactLearnWebPartProps {
  description:string;
  property1: string;
  property2: string;
  title:string;
}

export default class ReactLearnWebPart extends BaseClientSideWebPart<IReactLearnWebPartProps> {
  public render(): void {
    const element: React.ReactElement<IReactLearnProps > = React.createElement(
      ReactLearn,
      {
        description:"Sara",
  property1: "Cindy",
  property2: "Olive",
  title:"Mary"
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }s

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected get disableReactivePropertyChanges(): boolean {
    return true;
    }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
