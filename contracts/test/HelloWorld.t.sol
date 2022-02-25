// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "ds-test/test.sol";

import "../HelloWorld.sol";

contract HelloWorldTest is DSTest {
    HelloWorld private helloWorld;

    function setUp() public {
        helloWorld = new HelloWorld("hello");
    }

    function testMsg() public {
      assertEq(helloWorld.hello(), "hello");
    }
}
