# VPS deployment

```bash
git clone https://github.com/ZaFaR48/zafarihakimjon-portfolio.git /opt/zafarihakimjon
cd /opt/zafarihakimjon
docker compose up -d --build
ufw allow 3004/tcp
docker compose ps
curl -I http://127.0.0.1:3004
```

Open `http://13.140.180.178:3004`.
