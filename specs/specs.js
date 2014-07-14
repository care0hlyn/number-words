describe("numberWords", function(){
  it("returns the written form of a one digit", function() {
    numberWords("1").should.equal("one");
  });
  it("returns the written form of a two-digit number", function(){
    numberWords("20").should.equal("twenty");
  });
  it("returns the written form of a two-digit number", function(){
    numberWords("21").should.equal("twenty one");
  });
});

