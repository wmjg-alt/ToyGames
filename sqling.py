import sqlite3 as lite
import pandas as pd

pd.set_option('display.max_rows', None)
pd.set_option('display.max_columns', None)
pd.set_option('display.width', None)
pd.set_option('display.max_colwidth', None)

con = None
cur = None
f = 'test.db'


def open_db(filename):
    global con, cur
    con = lite.connect(filename)
    with con:
        cur = con.cursor()
        print("Remember to 'con.close()' when you're done")
    
def create_table(name, parastring):
    global con, cur
    cur.execute("CREATE TABLE if not exists "+name+"("+parastring+")")
    con.commit()
    print(name,"created")


def insert_to(table, parastring):
    global con,cur
    cur.execute("INSERT INTO "+table+" VALUES("+parastring+")")
    con.commit()

def query(q):
    global con, cur
    print(pd.read_sql_query(q, con))

def columns(tab, name, typ):
    adder = "ALTER TABLE "+tab+" ADD COLUMN "+name+" "+typ
    cur.execute(adder)
    con.commit()

def updater(table, sett, where):
    global con, cur
    upda = "UPDATE "+table+" SET "+sett+" WHERE "+where
    cur.execute(upda)
    con.commit()

def see(table):
    query("Select * FROM "+table)

def view(state, election, year):
    sel = "SELECT e_name, years.year, state_name, political_lean, points, total, allocations, cand_name, party, pop_vote, population "
    fro = "FROM results JOIN elections ON eid=e_id JOIN states ON sid = s_id JOIN years ON results.year=years.year JOIN totals ON rid =r_id "
    whe = "WHERE state_name='"+state+"' AND results.year=" +str(year)+" AND e_name='"+election+"' "
    ore = "ORDER BY pop_vote DESC "
    full= sel + fro + whe + ore
    query(full)

open_db('elections.db')
