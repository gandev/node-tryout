var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type':'text/html; charset=windows-1252'});
  res.end('<BODY>1|MPP|A2C33351900||9120001|PACK PRODUCT TEXT7|Nr.:<BR>2|MPP|A2C33351900||9120001|PACK PRODUCT IDX DEFAULT|00<BR>3|MPP|A2C33351900|00|9120001|PACK PRODUCT TEXT4|R2100<BR>4|MPP|A2C33351900|00|9120001|PACK PRODUCT TEXT8|K32 BAT.K<BR>5|MPP|A2C33351900|00|9120001|PACK PRODUCT LENGTH|10<BR>6|MPP|A2C33351900|00|9120001|PACK BOX USE STORED FLAG|TRUE<BR>7|MPP|A2C33351900|00|9120001|PACK BOX LABEL FILE|pdb_lab_vda2.lbl<BR>8|MPP|A2C33351900||9120001|PACK PRINT LOWAMOUNT|TRUE<BR>9|MPP|A2C33351900||9120001|PACK BOX LABEL FILE TMP|uk_tmp2.lbl<BR>10|MPP|A2C33351900|00|9120001|PACK PRODUCT MASK VB|[A-Z][A-Z]## [0-9A-F]####R2100*<BR>11|MPP|A2C33351900|00|9120001|PACK BOX COUNT|24<BR>12|MPP|A2C33351900||9120001|PACK PRODUCT TEXT8|Fabrique en Allemange<BR>13|MPP|A2C33351900||9120001|PACK PRODUCT TEXT3| <BR>14|MPP|A2C33351900||9120001|PACK PRODUCT TEXT1|A2C33351900<BR>15|MPP|A2C33351900||9120001|PACK BOX LABEL TYPE|L_UK_LBO<BR>16|MPP|A2C33351900|00|9120001|PACK PRODUCT TEXT7|76410 Clèon - France<BR>17|MPP|A2C33351900|00|9120001|PACK PRODUCT TEXT6|Renault Clèon<BR>18|MPP|A2C33351900|00|9120001|PACK PRODUCT TEXT1|A2C33351900<BR>19|MPP|A2C33351900|00|9120001|PACK PRODUCT MASK VB TEMP|[A-Z][A-Z]## [0-9A-F]####R2100*<BR>20|MPP|A2C33351900||9120001|PACK PICTURE PRODUCT|a2c00012054.gif<BR>21|MPP|A2C33351900||9120001|PACK PICTURE BOX|uk_behaelter.jpg<BR>22|MPP|A2C33351900|00|9120001|PACK PRODUCT COMMENT|Index 0A (VDA, R2100)<BR>23|MPP|A2C33351900||9120001|PACK PRODUCT TEXT9|VDO, Regensburg, Germany<BR>24|MPP|A2C33351900||9120001|PACK PRODUCT TEXT12|- agralle<BR>25|MPP|A2C33351900||9120001|PACK PRODUCT TEXT11|- bouchement<BR>26|MPP|A2C33351900||9120001|PACK PRODUCT TEXT10|Injecteur conforme a.n.d.:<BR>27|MPP|A2C33351900||9120001|PACK PRODUCT IDX IGNORE|false<BR>28|MPP|A2C33351900|00|9120001|PACK PRODUCT TEXT2|1660006272R<BR>29|MPP|A2C33351900|00|9120001|PACK BOX DATE FORMAT|YYMMDD<BR>30|MPP|A2C33351900||9120001|PACK PRODUCT TEXT6|Renault-Nr.:<BR>31|MPP|A2C33351900||9120001|PACK BOX LABEL TYPE TMP|L_UK_LBO_TMP<BR>32|MPP|A2C33351900|00|9120001|PACK PRODUCT TEXT9|026008<BR>33|MPP|A2C33351900|00|9120001|PACK PRODUCT TEXT3|K05.21 Renault Injektor DRAFT<BR>34|MPP|A2C33351900|00|9120001|PACK BOX LABEL LENGTH|11<BR>(34 ROWS FOUND)<BR>');
}).listen(80, '10.1.1.60');
console.log('Server running at http://10.1.1.60/');