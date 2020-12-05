
#include <SPI.h>
#include <Adafruit_ST7735.h>

#define cs2  9
#define dc   8
#define rst  7

Adafruit_ST7735 tft1 = Adafruit_ST7735( cs1, dc, rst);  // declare an instance of the ST7735

void setup() {
  SPI.begin();
  tft1.initR(INITR_BLACKTAB);
  tft1.setRotation( 1);
  tft1.fillScreen(ST7735_BLUE);

}

void loop(){
  tft1.setTextColor( ST7735_WHITE);
  tft1.print(millis());
  delay(200);
}
