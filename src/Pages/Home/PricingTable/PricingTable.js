import React from 'react';
import './PricingTable.css'

const PricingTable = () => {
    return (
        <div class="container ">
            <div class="flex">
                <div class="">
                    <div class="pricing-table">
                        <svg viewbox="0 0 100 55" class="pricing-header">
                            <path d="M 0,0 H100 V50 C55,0 50,80 0,40 Z" stroke="none" fill="#EF3E36" />
                            <text x="30" y="23" fill="#fff" font-size="13">PLan-1</text>
                        </svg>
                        <div class="price-value">
                            <div class="value">
                                <span class="currency">$</span>
                                <span class="amount">10.99</span>
                            </div>
                        </div>
                        <div class="pricing-content">
                            <ul>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                            </ul>
                        </div>
                        <div class="Sign-Up">
                            <a href="">Buy Plan</a>
                        </div>
                    </div>
                </div>

                <div class="">
                    <div class="pricing-table blue">
                        <svg viewbox="0 0 100 55" class="pricing-header">
                            <path d="M 0,0 H100 V50 C55,0 50,80 0,40 Z" stroke="none" fill="#1CA4B9" />
                            <text x="30" y="23" fill="#fff" font-size="13">PLan-2</text>
                        </svg>
                        <div class="price-value">
                            <div class="value">
                                <span class="currency">$</span>
                                <span class="amount">20.99</span>
                            </div>
                        </div>
                        <div class="pricing-content">
                            <ul>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                            </ul>
                        </div>
                        <div class="Sign-Up">
                            <a href="">Buy Plan</a>
                        </div>
                    </div>
                </div>

                <div class="">
                    <div class="pricing-table green">
                        <svg viewbox="0 0 100 55" class="pricing-header">
                            <path d="M 0,0 H100 V50 C55,0 50,80 0,40 Z" stroke="none" fill="#e4ac1e" />
                            <text x="30" y="23" fill="#fff" font-size="13">PLan-3</text>
                        </svg>
                        <div class="price-value">
                            <div class="value">
                                <span class="currency">$</span>
                                <span class="amount">30.99</span>
                            </div>
                        </div>
                        <div class="pricing-content">
                            <ul>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                            </ul>
                        </div>
                        <div class="Sign-Up">
                            <a href="">Buy Plan</a>
                        </div>
                    </div>
                </div>


                <div class="">
                    <div class="pricing-table green">
                        <svg viewbox="0 0 100 55" class="pricing-header">
                            <path d="M 0,0 H100 V50 C55,0 50,80 0,40 Z" stroke="none" fill="#e4ac1e" />
                            <text x="30" y="23" fill="#fff" font-size="13">PLan-3</text>
                        </svg>
                        <div class="price-value">
                            <div class="value">
                                <span class="currency">$</span>
                                <span class="amount">30.99</span>
                            </div>
                        </div>
                        <div class="pricing-content">
                            <ul>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                                <li>
                                    Lorem ipsum</li>
                            </ul>
                        </div>
                        <div class="Sign-Up">
                            <a href="">Buy Plan</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default PricingTable;