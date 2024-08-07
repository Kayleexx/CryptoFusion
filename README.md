
# CryptoFusion App

## Overview

The **CryptoFusion** is a web application designed to provide users with real-time cryptocurrency data, including trends, news, and other related information. Built using React, Redux, and various APIs, this app aims to deliver an intuitive and comprehensive experience for cryptocurrency enthusiasts.

## Features

- **Real-Time Cryptocurrency Data**: Get the latest data on cryptocurrencies, including price, market cap, volume, and more.
- **Cryptocurrency Trends**: Visualize price trends over time with interactive charts.
- **Crypto News**: Stay updated with the latest news and developments in the cryptocurrency world.
- **Market Insights**: Access detailed information about cryptocurrency exchanges and market metrics.

## Technologies Used

- **Frontend**: React, Ant Design, Chart.js
- **State Management**: Redux, RTK Query
- **APIs**:
  - [CoinRanking API](https://rapidapi.com/Coinranking/api/coinranking1) for cryptocurrency data
  - [Alpha Vantage API](https://rapidapi.com/bonaipowered/api/news-api14) for news

## Setup and Installation

### Prerequisites

- Node.js and npm installed on your machine.
- A RapidAPI key for accessing the CoinRanking and Alpha Vantage APIs.

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/crypto-market-app.git
    cd crypto-market-app
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Configure Environment Variables**

    Create a `.env` file in the root directory and add the following:

    ```bash
    REACT_APP_RAPIDAPI_KEY=your-rapidapi-key
    REACT_APP_CRYPTO_API_URL=https://coinranking1.p.rapidapi.com
    REACT_APP_NEWS_API_URL=https://alpha-vantage.p.rapidapi.com/query
    REACT_APP_NEWS_RAPIDAPI_HOST=alpha-vantage.p.rapidapi.com
    REACT_APP_CRYPTO_RAPIDAPI_HOST=coinranking1.p.rapidapi.com
    ```

4. **Start the Development Server**

    ```bash
    npm start
    ```

    The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

- **Homepage**: Displays the global cryptocurrency stats and recent trends.
- **Cryptocurrencies**: View detailed information about various cryptocurrencies.
- **Exchanges**: Explore different cryptocurrency exchanges and their metrics.
- **News**: Read the latest news related to cryptocurrencies.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

# Website: [CryptoFusion](https://66b27952f8e81500083e6b0e--cryptofusion.netlify.app/)

---
