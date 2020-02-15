import { RouteComponentProps } from "react-router";

export interface MyProfileProps extends RouteComponentProps<{
    id: string;
}> {}
