from curses.ascii import TAB
from venv import create
import pandas as pd
import sqlite3

def execute(request):
    efficiency = pd.read_csv("./result.csv").iloc[:,12].values
    conn = sqlite3.connect('./db.db')
    res = conn.execute(f"SELECT name, company FROM branch WHERE email='{request['email']}'")
    res = res.fetchone()
    table = res[1] + '_' + res[0]
    conn.execute(f'CREATE TABLE IF NOT EXISTS "{table}" ("Efficiency"	REAL NOT NULL);')
    conn.commit()
    conn.execute(f"DELETE FROM {table}")
    conn.commit()
    avg = 0
    for i in range(0, len(efficiency)):
        conn.execute(f"INSERT INTO {table} VALUES({efficiency[i] * 100})")
        avg += efficiency[i] * 100
    conn.commit()
    avg /= efficiency
    conn.execute(f"UPDATE {res[0]} SET average={avg}, nofusers={len(efficiency)}  WHERE email='{request.email}'")

    