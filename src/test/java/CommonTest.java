import com.tplaymeow.itmo_web_lab2.ServiceService;
import org.testng.Assert;
import org.testng.annotations.Test;

public class CommonTest {
    @Test
    public void testCommonSuccess() {
        Assert.assertEquals(ServiceService.getNumber(), 5);
    }

    @Test
    public void testCommonFailure() {
        Assert.assertEquals(ServiceService.getNumber(), 10);
    }
}
