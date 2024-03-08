import { ethers } from 'ethers';

declare module 'ethers' {
    export namespace providers {
       providers:any
    }
}